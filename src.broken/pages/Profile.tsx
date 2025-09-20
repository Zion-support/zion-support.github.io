import { useState } from 'react',
import type { GetServerSideProps } from 'next',
// Removed GetServerSidePropsContext, NextApiRequestCookies from 'next'
// Removed ParsedUrlQuery from 'querystring' as it's not directly used if context is simplified
import { ProfileForm, ProfileValues } from '@/components/profile/ProfileForm',
import { PointsBadge } from '@/components/loyalty/PointsBadge',
import type { Order } from '@/hooks/useOrders',
import Link from 'next/link',
import type { IncomingMessage, IncomingHttpHeaders } from 'http', // For req type

interface User {
  id: string,
  name: string,
  email: string,
  avatarUrl: string,
  notifications: { email: boolean, push: boolean },
  softDeleted?: boolean,
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null),
  const [avatarPreview, setAvatarPreview] = useState<string>(''),

// Define a minimal context type focusing on what's used
interface MySimpleServerSidePropsContext {
  req: { headers: IncomingHttpHeaders }, // req.headers.cookie is used
  // Add other context properties if they were used by the function: // res?: ServerResponse, // from 'http'
  // query?: ParsedUrlQuery, // from 'querystring'
  // params?: ParsedUrlQuery,
  // resolvedUrl?: string,
  // locale?: string,
  // locales?: string[],
  // defaultLocale?: string
}

export default function Profile({ user: initialUser, orders }: ProfileProps) {
  const [user, setUser] = useState(initialUser),

  const handleSave = async () => {
    if (!user) return,
    const res = await fetch('/api/users/me', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }),
    const data = await res.json(),
    setUser(data),
  },

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
      const reader = new FileReader(),
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string)
      },
      reader.readAsDataURL(file),
    }
  },

  const handleDelete = async () => {
    const confirm = window.prompt('Enter password to confirm'),
    if (!confirm) return,
    await fetch('/api/users/me', { method: 'DELETE' }),
    setUser(prev => (prev ? { ...prev, softDeleted: true } : prev)),
  },

  if (!user) {
    return (
      <div className="p-4">Loading...</div>
    ),
  }

  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="info" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-4">
          <TabsTrigger value="info">Personal Info</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="info">
          <div className="space-y-4">
            <div>
              <Avatar className="w-24 h-24 mb-2">
                {avatarPreview || user.avatarUrl ? (
                  <AvatarImage src={avatarPreview || user.avatarUrl} alt="avatar" />
                ) : (
                  <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                )}
              </Avatar>
              <Input type="file" aria-label="avatar" onChange={handleAvatarChange} />
            </div>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={user.name}
                onChange={e => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={user.email}
                onChange={e => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <Button variant="destructive" onClick={handleDelete}>
            Delete account
          </Button>
        </TabsContent>

        <TabsContent value="notifications">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="nemail"
                checked={user.notifications.email}
                onCheckedChange={v =>
                  setUser({
                    ...user,
                    notifications: { ...user.notifications, email: !!v }
                  })
                }
              />
              <label htmlFor="nemail" className="text-sm text-white">
                Email notifications
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="npush"
                checked={user.notifications.push}
                onCheckedChange={v =>
                  setUser({
                    ...user,
                    notifications: { ...user.notifications, push: !!v }
                  })
                }
              />
              <label htmlFor="npush" className="text-sm text-white">
                Push notifications
              </label>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

export const getServerSideProps: GetServerSideProps<ProfileProps> = async (context: MySimpleServerSidePropsContext) => {
  const { req } = context,
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http: //localhost:3000',
  const [userRes, ordersRes] = await Promise.all([
    fetch(`${base}/api/users/me`, { headers: { cookie: req.headers.cookie || '' } }),
    fetch(`${base}/api/orders?user_id=me`, { headers: { cookie: req.headers.cookie || '' } })
  ]),

  if (userRes.status === 401) {
    return { redirect: { destination: '/login', permanent: false } },
  }

  const user = await userRes.json(),
  let orders: Order[] = [],
  if (ordersRes.ok) {
    orders = await ordersRes.json(),
    orders = orders.slice(0, 3),
  }

  return { props: { user, orders } },
},
