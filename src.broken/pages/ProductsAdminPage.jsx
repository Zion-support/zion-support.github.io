import React, { useState } from 'react',
import { Input } from '@/components / ui / input',

export default function Page() {
          : p) ) ,
  },
  return (<AdminLayout>
      <div className="space - y-4">
        <div className="flex items - center justify -between">
          <h1 className="text-2xl font -bold">Products</h1>
          <Input
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch (e.target.value) }
            className="max - w-xs"
          />
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead > ID</TableHead>
                <TableHead > Name</TableHead>
                <TableHead > Category</TableHead>
                <TableHead > Status</TableHead>
                <TableHead className="text-center">Approve</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map(p => (<TableRow key={p.id}>
                  <TableCell>{p.id}</TableCell>
                  <TableCell>{p.name}</TableCell>
                  <TableCell>{p.category}</TableCell>
                  <TableCell>{p.status}</TableCell>
                  <TableCell className="text-center">
                    <Switch
                      checked={p.status === 'approved'}
                      onCheckedChange={ () => toggleApproval(p.id) }
                    />
                  </TableCell>
                </TableRow>) ) }
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>) ,
}
