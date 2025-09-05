import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',
import path from 'path',
import Link from 'next/link',
type TalentItem = { talentSlug: string, talentName: string, averageRating: number, totalReviews: number },

type Props = { items: TalentItem[] },

const TopTalentsPage: NextPage<Props> = ({ items }) => {
  return (
    <main className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Top Talents — Auto Generated</h1>
      <div className=&quot;grid gap-3&quot;>
        {items.map((t) => (
          <Link key={t.talentSlug} href={`/talent/${t.talentSlug}`}>
            <div className=&quot;enhanced-card hover:shadow-lg cursor-pointer flex items-center justify-between&quot;>
              <div>
                <div className=&quot;font-medium&quot;>{t.talentName}</div>
                <div className=&quot;text-sm text-gray-600&quot;>{t.averageRating.toFixed(1)}★ • {t.totalReviews} reviews</div>
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
  let items: TalentItem[] = [],
  try {
    const raw = fs.readFileSync(p, 'utf8'),
    const data = JSON.parse(raw),
    items = data.items || []
  } catch {}
  return { props: { items } }
},

export default TopTalentsPage,