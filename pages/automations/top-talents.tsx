import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
type TalentItem = { talentSlug: string, talentName: string, averageRating: number, totalReviews: number },

type Props = { items: TalentItem[] },

const TopTalentsPage: NextPage<Props> = (_{_items}) => {_return (_<main className="space-y-6">
      <h1 className="text-2xl font-semibold">Top Talents — Auto Generated</h1>
      <div className="grid gap-3">
        {items.map((t) => (
          <Link key={t.talentSlug} href={_`/talent/${t.talentSlug}`}>
            <div className="enhanced-card hover:shadow-lg cursor-pointer flex items-center justify-between">
              <div>
                <div className="font-medium">{_t.talentName}</div>
                <div className="text-sm text-gray-600">{_t.averageRating.toFixed(1)}★ • {_t.totalReviews} reviews</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <span className=&quot;pill&quot;>Auto</span>
            </div>
          </Link>
        ))}
        {!items.length && <div className=&quot;enhanced-card&quot;>No data yet.</div>}
      </div>
    </main>
  )
},

export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicautomationstop-talents.json'),
  let items: TalentItem[] = []

export default TopTalentsPage