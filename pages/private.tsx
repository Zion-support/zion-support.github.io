import {
  {
  Link from 'next/link' import Head from 'next/head' import type {
  User as SupabaseUser 
}from '@supabase/supabase-js' interface PrivatePageProps {
  user: SupabaseUser 
}export default function PrivatePage ({
  user 
}: PrivatePageProps) {
  return (<> <Head> <title>Private Profile - Zion Tech Marketplace</title> <meta name="description" content="Private user profile page" /> </Head> <div className="container max-w-4xl mx-auto py-8" > <Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <Shield className="h-5 w-5" /> Private User Profile </CardTitle> <p className="text-muted-foreground" > This page is only accessible to authenticated users </p> </CardHeader> <CardContent className="space-y-6" > <div className="flex items-start gap-4" > <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20" > <User className="h-6 w-6 text-blue-600 dark:text-blue-400" /> </div> </code> </div> </div> </div> </div> <div className="p-4 bg-muted/50 rounded-lg" > <h4 className="font-medium mb-2" >Authentication Details</h4> <div className="grid gap-2 text-sm" > <div> ? new Date (user.last sign in at) .toLocaleString () : 'Never' 
}</div> <div> </code> </div> </div> </div> <div className="flex gap-2" > <Button asChild> <Link href="/dashboard" > Go to Dashboard </Link> </Button> <Button asChild variant="outline" > <Link href="/" > Back to Home </Link> </Button> </div> </CardContent> </Card> </div> </>) 
}export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const supabase = createServerSideClient (context) const {
  data, error 
}= await supabase.auth.getUser () if (error || !data?.user) {
  return {
  redirect: {
  destination: '/auth/login', permanent: false 
}
}
}return {
  props: {
  user: data.user 
}
}
}