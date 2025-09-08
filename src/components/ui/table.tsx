<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7






interface TableCellProps {
  children: React.ReactNode;
}



export function TableBody({ children }: TableBodyProps) {
  return (
    <tbody>
      {children}
    </tbody>
  );
}

export function TableRow({ children, className }: TableRowProps) {
  return (
    <tr className={`border-b border-zion-slate hover:bg-zion-blue-light ${className || ''}`}>
      {children}
    </tr>
  );
}

export function TableHead({ children, className }: TableHeadProps) {
  return (
    <th className={`px-4 py-3 text-left font-medium text-zion-cyan ${className || ''}`}>
      {children}
    </th>
  );
}

export function TableCell({ children }: TableCellProps) {
  return (
    <td className="px-4 py-3 text-zion-slate">
      {children}
    </td>
  );
}