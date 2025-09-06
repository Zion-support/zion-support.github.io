
import type { NextPage, GetServerSideProps } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
<<<<<<< HEAD
type TalentItem = {
=======

type TalentItem = {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  talentSlug: string;
  talentName: string;
  averageRating: number;
  totalReviews: number;
<<<<<<< HEAD
}
type Props = { items: TalentItem[] }
const TopTalentsPage: NextPage<Props> = ({ items }) => {
=======
};

type Props = { items: TalentItem[] };

const TopTalentsPage: NextPage<Props> = ({ items }) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <main className="space-y-6">;
      <h1 className="text-2xl font-semibold">Top Talents — Auto Generated</h1>;
      <div className="grid gap-3">;
        {items && items.map((t) => (;
          <Link key={t && t.talentSlug} href={`/talent/${t && t.talentSlug}`}>;
            <div className="enhanced-card hover:shadow-lg cursor-pointer flex items-center justify-between">;
              <div>;
                <div className="font-medium">{t && t.talentName}</div>;
                <div className="text-sm text-gray-600">;
                  {t && t.averageRating.toFixed(1)}★ • {t && t.totalReviews} reviews;
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
<<<<<<< HEAD
}
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(
    process.cwd()
    "public"
    "automations"
    "top-talents.json"
  );
  let items: TalentItem[] = [];
  try {
    const raw = fs.readFileSync(p, "utf8");
    const data = JSON.parse(raw);
    items = data.items |[];
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } catch {}
  return { props: { items } }
}
export default TopTalentsPage;

