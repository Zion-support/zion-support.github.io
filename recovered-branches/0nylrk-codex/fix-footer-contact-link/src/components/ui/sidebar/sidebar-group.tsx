
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string,
  icon?: React.ReactNode,
  defaultExpanded?: boolean,
  showChevron?: boolean
}

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        ref={ref as SafeRef<HTMLDivElement>}
        className={cn("px-3 py-2", className)}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {...props}
      >;

                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
              />;

            )}
          </button>;
        )}
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>
      </div>

SidebarGroup.displayName = "SidebarGroup",
export { SidebarGroup },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>;
      </div>;
    );
  }
),;
SidebarGroup.displayName = "SidebarGroup",;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export { SidebarGroup };
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
