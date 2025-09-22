
import React from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Switch } from "@/components/ui/switch",;
import { toast } from "@/hooks/use-toast",;
import { InfoIcon } from "lucide-react",;
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger} from "@/components/ui/tooltip",;
;
export function RoleManagement() {;
  // Mock team members data;
  const teamMembers = [;
    {;

    <div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>;
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">;

              </div>;
              <p className="text-sm text-muted-foreground">{description}</p>;
            </div>;
          ))}
        </div>;
      </div>;

      <div className="rounded-md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Team Member</TableHead>;
              <TableHead>Role</TableHead>;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
                  View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view candidate profiles and applications;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can edit candidate information and status;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can create and publish job listings;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can add, edit, and remove team members;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view and manage billing information;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;

                    <option value="Admin">Admin</option>;
                    <option value="Recruiter">Recruiter</option>;
                    <option value="Manager">Manager</option>;
                    <option value="Viewer">Viewer</option>;
                  </select>;
                </TableCell>;
                <TableCell className="text-center">;

                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;

                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;

                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;

                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;

                    }
                  />;
                </TableCell>;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;
    </div>;
