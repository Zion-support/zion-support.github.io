
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;

              ))}
            </TableBody>;
          </Table>;
        </div>;
      </div>;

          onClick={() => setStatusFilter("all")}
          size="sm";
        >;
          All;
        </Button>;
        <Button;
          variant={statusFilter === "open" ? "default" :"outline"}
          onClick={() => setStatusFilter("open")}

                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;

                    {dispute.status.replace('_ ')}
                  </Badge>;
                </TableCell>;
                <TableCell className="text-right">;
                  <Button asChild size="sm">;
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>;
                  </Button>;
                </TableCell>;
              </TableRow>;
            ))}

