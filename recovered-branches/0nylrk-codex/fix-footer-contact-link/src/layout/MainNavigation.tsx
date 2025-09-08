













  ],




      name: "Dashboard"
      href: "/dashboard"

      matches: (path: string) => path === "/dashboard" |path === "/client-dashboard" |path === "/talent-dashboard"
    })
  }
  // Add admin-only links;
  if (isAdmin) {}
    links.push({"
      name: "Analytics""
      href: "/analytics""
      matches: (path: string) => path.startsWith("/analytics")
    })
  }





      name: "Dashboard",;
      href: "/dashboard",;
      matches: (path: string) => path === "/dashboard" || path === "/client-dashboard" || path === "/talent-dashboard";


  // Add admin-only links;

          <li key={link && link.name}>;
            <Link,
to={link && link.href}
              className={cn(

    }
  ],
  // Add authenticated-only links;

    });
  }
  return (;




        ))}

              className={cn(            </Link>;

              <MessageSquare className="w-4 h-4 mr-1" />;
              Messages;
              {unreadCount > 0 && (;"
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;
                  {unreadCount}

                </span>;






