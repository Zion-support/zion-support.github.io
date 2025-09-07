import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
type TalentItem = any;
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
const TopTalentsPage: NextPage<Props> = ({ items }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Page</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Content coming soon.</p>
        </div>
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
    items = data.items || [];
  } catch {}
  return { props: { items } };
};
}

export default TopTalentsPage;
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
