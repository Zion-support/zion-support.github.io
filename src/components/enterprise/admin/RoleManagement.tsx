

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,

import React from "react",
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,

=======

            {teamMembers.map((member) => (
              <TableRow key={member.id}>


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                <TableCell>
                  <div className='font-medium'>{member.name}</div>
                  <div className='text-sm text-muted-foreground'>
                    {member.email}
                  </div>
                </TableCell>
                <TableCell>
