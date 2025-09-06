
=======
import React from "react",;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
<<<<<<< HEAD

export function TeamActivity() {;
  // Mock activity data;
  const activities = [;
    {;

    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Recent Team Activity</h3>;
        <div className="flex items-center gap-2">;
          <div className="relative">;

            />;
          </div>;
          <Button variant="outline" size="icon" className="h-10 w-10">;
            <CalendarIcon className="h-4 w-4" />;
          </Button>;
        </div>;
      </div>;

      <div className="rounded-md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>User</TableHead>;
              <TableHead>Activity</TableHead>;
              <TableHead>Target</TableHead>;
              <TableHead>Category</TableHead>;
              <TableHead>Time</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;

                </TableCell>;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;

      <div className="flex items-center justify-between">;
        <Button variant="outline" size="sm">;
          Previous;
        </Button>;

        <Button variant="outline" size="sm">;
          Next;
        </Button>;
      </div>;

}