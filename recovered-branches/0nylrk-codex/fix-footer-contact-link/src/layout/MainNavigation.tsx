
  if (isAuthenticated) {
    }
    links.push({

    })
  }
  // Add admin-only links,
if (isAdmin) {
    }
    links.push({

        {links.map((link) => (
          <li key={link.name}>
            <Link,
to={link.href}
              className={cn(

    }
  ];

  // Add authenticated-only links;

    });
  }

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

        {links.map((link) => (;
          <li key={link.name}>;
            <Link;
              to={link.href}
              className={cn(;

              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
        {isAuthenticated && (;
          <li>;
            <Link

              className={cn(            </Link>;
          </li>;
        ))}
        {/* Messages link with unread counter */}
        {isAuthenticated && (;
          <li>;
            <Link

              )}
            >;
              )}                </span>;
              )}
            </Link>;
          </li>;
        )}

      </ul>;
    </nav>;
  );
        {/* Messages link with unread counter */}
        {isAuthenticated && (
          <li>
            <Link
              to = $2;
                location.pathname === /messages" || location.pathname === "/inbox
                  ? bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan
              )}
            >
              <MessageSquare className=w-4 h-4 mr-1" />
              Messages
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
}
