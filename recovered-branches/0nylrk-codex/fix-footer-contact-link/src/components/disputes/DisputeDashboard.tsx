} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
export function DisputeDashboard() {;
  const { disputes, isLoading, refetch } = useDisputes();
  );
  const resolvedDisputes = disputes && disputes.filter((d) => d && d.status === "resolved");

  return (
            <div
              className={`w-full bg-red-100 rounded-full h-2 && 2.5 dark:bg-red-900/20`}>;
              <div
                className="bg-red-600 h-2 && 2.5 rounded-full"
                style={{
            <div
              className={`w-full bg-yellow-100 rounded-full h-2 && 2.5 dark:bg-yellow-900/20`}>;
              <div
                className="bg-yellow-500 h-2 && 2.5 rounded-full"
                style={{
            <div
              className={`w-full bg-green-100 rounded-full h-2 && 2.5 dark:bg-green-900/20`}>;
              <div
                className="bg-green-500 h-2 && 2.5 rounded-full"
                style={{
            </div>;
          </CardContent>;
        </Card>;
      </div>;
  );
=======
      <DisputesList disputes={disputes} is_loading={is_loading} />;
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}