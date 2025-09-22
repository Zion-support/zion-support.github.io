
import React, { useState } from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;

import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;

  const handleAddMember = () => {;
    // In a real app, this would make an API call to add the member;
    if (!newMemberEmail) {;
      toast({;

              Add Team Member;
            </Button>;
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;

                </select>;
              </div>;
            </div>;
            <DialogFooter>;

                Cancel;
              </Button>;
              <Button onClick={handleAddMember}>Send Invitation</Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;

        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Name</TableHead>;
              <TableHead>Role</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead>Last Active</TableHead>;

                        {member.email}
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
