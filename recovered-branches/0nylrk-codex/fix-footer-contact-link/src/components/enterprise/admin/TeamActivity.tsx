
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > User</TableHead>;
              <TableHead > Activity</TableHead>;
              <TableHead > Target</TableHead>;
              <TableHead > Category</TableHead>;
              <TableHead > Time</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {activities.map ((activity) => (
              <TableRow key={activity.id}>;

                </TableCell>;

    </div>);

}                  {formatDate(activity.timestamp)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

