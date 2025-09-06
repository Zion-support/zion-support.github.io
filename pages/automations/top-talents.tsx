

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import type { NextPage, GetServerSideProps } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";


type TalentItem = {;

  talentSlug: string;
  talentName: string;
  averageRating: number;
  totalReviews: number;

<<<<<<< HEAD
}
type Props = { items: TalentItem[] }
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


};

type Props = { items: TalentItem[] };



<<<<<<< HEAD
import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',
import path from 'path',
import Link from 'next/link',
=======

=======
=======
import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
type TalentItem = { talentSlug: string, talentName: string, averageRating: number, totalReviews: number },
type Props = { items: TalentItem[] },




<<<<<<< HEAD



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const TopTalentsPage: NextPage<Props> = ({ items }) => {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-semibold">Top Talents — Auto Generated</h1>
      <div className="grid gap-3">
        {items.map((t) => (
          <Link key={t.talentSlug} href={`/talent/${t.talentSlug}`}>
            <div className="enhanced-card hover:shadow-lg cursor-pointer flex items-center justify-between">
              <div>
                <div className="font-medium">{t.talentName}</div>
                <div className="text-sm text-gray-600">{t.averageRating.toFixed(1)}★ • {t.totalReviews} reviews</div>
              </div>
              <span className="pill">Auto</span>
            </div>
          </Link>
        ))}
        {!items.length && <div className="enhanced-card">No data yet.</div>}
      </div>
    </main>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(
    process.cwd()
    "public"
    "automations"
    "top-talents.json"
  );
  let items: TalentItem[] = [];
  try {;
    const raw = fs && fs.readFileSync(p, "utf8");
    const data = JSON && JSON.parse(raw);
    items = data && data.items || [];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  } catch {}
  return { props: { items } }
}
export default TopTalentsPage;

  )
},
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(
    process.cwd(),
    "public",
    "automations",
    "top - talents.json",
  );
  let items: TalentItem[] = [];
  try {
<<<<<<< HEAD


=======
    const raw = fs.readFileSync (p, "utf8");
    const data = JSON.parse (raw);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    items = data.items || [];
  } catch {}
  return { props: { items } }
}
;

<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
  )
},
export const getServerSideProps: GetServerSideProps = async () => {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export default TopTalentsPage;
