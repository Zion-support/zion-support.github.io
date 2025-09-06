<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import type { NextPage, GetServerSideProps } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
type TalentItem = {
  talentSlug: string;
  talentName: string;
  averageRating: number;
  totalReviews: number;
<<<<<<< HEAD
}
type Props = { items: TalentItem[] }
=======
<<<<<<< HEAD
}
type Props = { items: TalentItem[] }
=======
};

type Props = { items: TalentItem[] };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
type TalentItem = { talentSlug: string, talentName: string, averageRating: number, totalReviews: number },
type Props = { items: TalentItem[] },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
const TopTalentsPage: NextPage<Props> = ({ items }) => {
  return (
    <main className="space-y-6">;
      <h1 className="text-2xl font-semibold">Top Talents  Auto Generated</h1>;
      <div className="grid gap-3">;
        {items && items.map((t) => (;
          <Link key={t && t.talentSlug} href={`/talent/${t && t.talentSlug}`}>;
            <div className="enhanced-card hover:shadow-lg cursor-pointer flex items-center justify-between">;
              <div>;
                <div className="font-medium">{t && t.talentName}</div>;
                <div className="text-sm text-gray-600">;
                  {t && t.averageRating.toFixed(1)}  {t && t.totalReviews} reviews;
                </div>;
              </div>;
              <span className="pill">Auto</span>;
            </div>;
          </Link>;
        ))}
        {!items && items.length && <div className="enhanced-card">No data yet.</div>}
      </div>;
    </main>;
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
  } catch {}
  return { props: { items } };
  let items: TalentItem[] = [];
  try {
    const raw = fs.readFileSync(p, "utf8");
    const data = JSON.parse(raw);
    items = data.items |[];
};

export const getServerSideProps: GetServerSideProps = async () => {;
  const p = path && path.join(;
    process && process.cwd(),;
    "public",;
    "automations",;
    "top-talents && talents.json",;
  );
  let items: TalentItem[] = [];
  try {;
    const raw = fs && fs.readFileSync(p, "utf8");
    const data = JSON && JSON.parse(raw);
    items = data && data.items || [];
    items = data.items || []
  } catch {}
  return { props: { items } }
}
export default TopTalentsPage;

import type { NextPage, GetServerSideProps } from './next';
import fs from './fs';
import path from './path';
import Link from './next / link';
;
type TalentItem = {
  talent_slug: string;
  talent_name: string;
  average_rating: number;
  total_reviews: number;
}
;
type Props = { items: TalentItem[] }
;
const TopTalentsPage: NextPage < Props> = ({ items }) => {
  return (
    <main className="space - y-6">;
      <h1 className="text - 2xl font - semibold">Top Talents  Auto Generated</h1>;
      <div className="grid gap - 3">;
        {items.map ((t) => (
          <Link key={t.talent_slug} href={`/talent/${t.talent_slug}`}>;
            <div className="enhanced - card hover:shadow - lg cursor - pointer flex items - center justify - between">;
              <div>;
                <div className="font - medium">{t.talent_name}</div>;
                <div className="text - sm text - gray - 600">;
                  {t.average_rating.to_fixed (1)}  {t.total_reviews} reviews;
                </div>;
              </div>;
              <span className="pill">Auto</span>;
            </div>;
          </Link>))}
        {!items.length && <div className="enhanced - card">No data yet.</div>}
      </div>;
    </main>);
}
;
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join (
    process.cwd (),
    "public",
    "automations",
    "top - talents.json",
  );
  let items: TalentItem[] = [];
  try {
<<<<<<< HEAD
=======
    const raw = fs.readFileSync(p, "utf8");
    const data = JSON.parse(raw);
    items = data.items || [];
  } catch {}
  return { props: { items } }
}
;
<<<<<<< HEAD
=======
=======

=======
  const p = path.join(process.cwd(), 'publicautomationstop-talents.json'),
  let items: TalentItem[] = [],
  try {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export default TopTalentsPage;
;
