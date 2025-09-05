className={cn()
cursor/fix-lint-push-and-merge-to-main-f3c1;
        baseClasses,
        variantClasses[variant],
        animationClasses[animation],
        className;
      )}
      style={style}
    />
  )}
// Predefined skeleton components for common use cases;
export function SkeletonText(..."args": an y[]): any {"
  // TODO: Implement
}"
  return ('')'
    <div className={cn('space-y-2', className)}>'
</div>
        <Skeleton key={i}'
          variant="text"""
          width={i === lines - 1 ? '75%' : '100%'}"          className="h-4""
           />
</Skeleton>
        </div>"
    <div className={cn('p-6 space-y-4', className)}>""
</div>"
      <div className="flex items-center space-x-4">""
</div>"
        <Skeleton variant="circular" width={40} height={40}   />""
</Skeleton>"
        <div className="space-y-2 flex-1">""
</div>"
          <Skeleton variant="text" width="60%"   />""
</Skeleton>"
          <Skeleton variant="text" width="40%"   />"
</Skeleton>
        </div>"
      </div>"""
      <Skeleton variant="text" lines={3}   />""
</Skeleton>"
      <div className="flex space-x-2">""
</div>"
        <Skeleton variant="rounded" width={80} height={32}   />""
</Skeleton>"
        <Skeleton variant="rounded" width={100} height={32}   />      </div>"
</Skeleton>
        </div>"
    <div className={cn('space-y-3', className)}>'
</div>'
      <div className="flex space-x-4">"
</div>"
          <Skeleton key={i} variant="text" width={120} height={20}   />        ))}"
</Skeleton>
      </div>"
        <div key={rowIndex} className="flex space-x-4">"
</div>"
            <Skeleton key={colIndex}"              variant="text""
              width={colIndex === 0 ? 150 : 100}
              height={16}
               />
</Skeleton>
        </div>
        </div>"
    <div';';''
      className={cn('''
        'grid gap-6',''
        columns === 1 && 'grid-cols-1',''
        columns === 2 && 'grid-cols-1 "md": gri d-cols-2',''
        columns === 3 && 'grid-cols-1 "md": gri d-cols-2 lg: gri d-cols-3',''
        columns === 4 && 'grid-cols-1 "md": anygri d-cols-2 lg: gri d-cols-4','
        className;)
      )}
    >
</div>
        <SkeletonCard key={i}   />      ))}
</SkeletonCard>
        </div>'
    <div className={cn('space-y-8', className)}>'
</div>'
      <div className="space-y-4">""
</div>"
        <Skeleton variant="text" width="80%" height={48} className="mx-auto"   />""
</Skeleton>"
        <Skeleton variant="text" width="60%" height={24} className="mx-auto"   />"
</Skeleton>
      </div>"
      <Skeleton variant="text" lines={3} className="max-w-2xl mx-auto"   />"
</Skeleton>"
      <div className="flex justify-center space-x-4">""
</div>"
        <Skeleton variant="rounded" width={160} height={48}   />""
</Skeleton>"
        <Skeleton variant="rounded" width={140} height={48}   />"
</Skeleton>
      </div>
    </div>
</Skeleton>"
</Skeleton>';''
className={cn() baseClasses,variantClasses[variant],animationClasses[animation],className )} style={style} /> )} export function SkeletonText(...args: an y[]): any { return (' <div className={cn('space-y-2',className)}> {Array.from({ length: anyline s }).map((_,i) => ( <Skeleton key={i} variant="text" width={i === lines - 1 ? '75%' : '100%'}" className="h-4" /> ))} </div> )} export function SkeletonCard(...args: an y[]): any { return (' <div className={cn('p-6 space-y-4',className)}>" <div className="flex items-center space-x-4">" <Skeleton variant="circular" width={40} height={40} />" <div className="space-y-2 flex-1">" <Skeleton variant="text" width="60%" />" <Skeleton variant="text" width="40%" /> </div> </div>" <Skeleton variant="text" lines={3} />" <div className="flex space-x-2">" <Skeleton variant="rounded" width={80} height={32} />" <Skeleton variant="rounded" width={100} height={32} /> </div> </div> )} export function SkeletonTable(...args: an y[]): any { return (' <div className={cn('space-y-3',className)}> {}" <div className="flex space-x-4"> {Array.from({ length: anycolumn s }).map((_,i) => (" <Skeleton key={i} variant="text" width={120} height={20} /> ))} </div> {} {Array.from({ length: anyrow s }).map((_,rowIndex) => (" <div key={rowIndex} className="flex space-x-4"> {Array.from({ length: anycolumn s }).map((_,colIndex) => ( <Skeleton key={colIndex}" variant="text" width={colIndex === 0 ? 150 : 100} height={16} /> ))} </div> ))} </div> )} export function SkeletonGrid(...args: an y[]): any { return ()'; <div';'; className={cn(' 'grid gap-6',columns === 1 && 'grid-cols-1',columns === 2 && 'grid-cols-1 md: gri d-cols-2',columns === 3 && 'grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3',columns === 4 && 'grid-cols-1 md: anygri d-cols-2 lg: gri d-cols-4',className )} > {Array.from({ length: item s }).map((_,i) => ( <SkeletonCard key={i} /> ))} </div> )} export function SkeletonHero(...args: an y[]): any { return (' <div className={cn('space-y-8',className)}> {}" <div className="space-y-4">" <Skeleton variant="text" width="80%" height={48} className="mx-auto" />" <Skeleton variant="text" width="60%" height={24} className="mx-auto" /> </div> {}" <Skeleton variant="text" lines={3} className="max-w-2xl mx-auto" /> {}" <div className="flex justify-center space-x-4">" <Skeleton variant="rounded" width={160} height={48} />" <Skeleton variant="rounded" width={140} height={48} /> </div> </div> )} "` </Skeleton> </Skeleton>';''