import { FileText import { Link  } from 'react-router-dom';
export default function Page() {
>
                <TableCell><Skeleton className="h-4 w-20"/></TableCell>
                <TableCell><Skeleton className="h-4 w-24"/></TableCell>
                <TableCell><Skeleton className="h-4 w-16"/></TableCell>
                <TableCell><Skeleton className="h-4 w-20"/></TableCell>
                <TableCell><Skeleton className="h-4 w-24"/></TableCell>
              </TableRow>) ) }
          </TableBody>
        </Table>) : orders.length === 0 ? (<EmptyState icon={<FileText className="h-10 w-10"/>} title="No Orders" description="You haven't purchased thing yet."/>) : (<Table>
          <TableHeader>
            <TableRow>
              <TableHead > Order #</TableHead>
              <TableHead > Date</TableHead>
              <TableHead > Total</TableHead>
              <TableHead > Status</TableHead>
              <TableHead > View</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (<TableRow key={order.orderId}>
                <TableCell className="font -medium">{order.orderId}</TableCell>
                <TableCell>{formatDate(order.date) }</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Link to={`/orders/${order.orderId}`} className="text-zion -purple underline">
                    View
                  </Link>
                </TableCell>
              </TableRow>) ) }
          </TableBody>
        </Table>) }
    </div>) }
