<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};

type Props = { items: TalentItem[] };

<<<<<<< HEAD
import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',
import path from 'path',
import Link from 'next/link',
type TalentItem = { talentSlug: string, talentName: string, averageRating: number, totalReviews: number },
type Props = { items: TalentItem[] },
=======



=======
=======
import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
type TalentItem = { talentSlug: string, talentName: string, averageRating: number, totalReviews: number },
type Props = { items: TalentItem[] },




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(
    process.cwd()
    "public"
    "automations"
    "top-talents.json"
=======


};

export const getServerSideProps: GetServerSideProps = async () => {;
  const p = path && path.join(;
    process && process.cwd(),;
    "public",;
    "automations",;
    "top-talents && talents.json",;
>>>>>>> 7c8bc30d7f67e73b4eaa80d227738ae796deedb9
  );
  let items: TalentItem[] = [];
  try {;
    const raw = fs && fs.readFileSync(p, "utf8");
    const data = JSON && JSON.parse(raw);
    items = data && data.items || [];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    items = data.items || []
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
    const raw = fs.readFileSync(p, "utf8");
    const data = JSON.parse(raw);
=======
    const raw = fs.readFileSync (p, "utf8");
    const data = JSON.parse (raw);
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    items = data.items || [];
  } catch {}
  return { props: { items } }
}
;
=======

<<<<<<< HEAD
  const p = path.join(process.cwd(), 'publicautomationstop-talents.json'),
  let items: TalentItem[] = [],
  try {
    const raw = fs.readFileSync(p, 'utf8'),
    const data = JSON.parse(raw),
    items = data.items || []
  } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return { props: { items }   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
=======
  )
},
export const getServerSideProps: GetServerSideProps = async () => {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default TopTalentsPage;
