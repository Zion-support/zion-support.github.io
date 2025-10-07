export default function MainLayout({children}
}: {children: React.ReactNode}
}) {
  return <div className='text-left'>{children}</div>
}
export default function MainLayout({ children }: { children: React.ReactNode }) { return ( <div className="text-left" > {children} </div> ); }