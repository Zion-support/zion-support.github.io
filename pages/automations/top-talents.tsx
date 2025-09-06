

import type { NextPage, GetServerSideProps } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
};

type Props = { items: TalentItem[] };

import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',
import path from 'path',
import Link from 'next/link',
type TalentItem = { talentSlug: string, talentName: string, averageRating: number, totalReviews: number },
type Props = { items: TalentItem[] },



import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
type TalentItem = { talentSlug: string, talentName: string, averageRating: number, totalReviews: number },
type Props = { items: TalentItem[] },




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
    "public",
    "automations",
    "top - talents.json",
  );
  let items: TalentItem[] = [];
  try {
    const raw = fs.readFileSync(p, "utf8");
    const data = JSON.parse(raw);
    const raw = fs.readFileSync (p, "utf8");
    const data = JSON.parse (raw);
    items = data.items || [];
  } catch {}
  return { props: { items } }
}
;
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
  )
},
export const getServerSideProps: GetServerSideProps = async () => {

export default TopTalentsPage;
;
