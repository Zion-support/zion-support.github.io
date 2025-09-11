>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

import type { NextPage, GetServerSideProps } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";


type TalentItem = {;



};
type Props = { items: TalentItem[] };
const TopTalentsPage: NextPage<Props> = ({ items }) => {;
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
=======
=======  talentSlug: string;
  talentName: string;
  averageRating: number;
  totalReviews: number;

=======


};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type Props = { items: TalentItem[] };




=======
=======




    "public",
    "automations",
    "top - talents.json",
  );
  let items: TalentItem[] = [];
  try {
    const raw = fs.readFileSync (p, "utf8");
    const data = JSON.parse (raw);
    items = data.items || [];
  } catch {}
  return { props: { items } }
}
;
export default TopTalentsPage;
;
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicautomationstop-talents.json'),
  let items: TalentItem[] = []

export default TopTalentsPage


import type { NextPage, GetServerSideProps } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
type TalentItem = {
  talentSlug: string;
  talentName: string;
  averageRating: number;
  totalReviews: number;
}
type Props = { items: TalentItem[] }
};

type Props = { items: TalentItem[] };

import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',
import path from 'path',
import Link from 'next/link',
type TalentItem = { talentSlug: string, talentName: string, averageRating: number, totalReviews: number },
type Props = { items: TalentItem[] },
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
        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        {!items.length && <div className="enhanced-card">No data yet.</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
  try {
    const raw = fs.readFileSync(p, "utf8");
    const data = JSON.parse(raw);
    items = data.items |[];
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
    "top-talents.json",;
  );
  let items: TalentItem[] = [];
  try {
    const raw = fs.readFileSync(p, "utf8");
    const data = JSON.parse(raw);
    items = data.items || [];
  } catch {}
  return { props: { items } };
};

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
export default TopTalentsPage;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

  )
},
export const getServerSideProps: GetServerSideProps = async () => {
export default TopTalentsPage;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
