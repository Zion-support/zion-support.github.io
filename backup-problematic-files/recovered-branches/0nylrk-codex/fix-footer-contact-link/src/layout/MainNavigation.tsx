</Link>;
          </li>;
        ))}
        ;
        {/* Messages link with unread counter */}
        {isAuthenticated && (;
          <li>;

              <MessageSquare className="w-4 h-4 mr-1" />;
              Messages;
              {unreadCount > 0 && (;
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;
                  {unreadCount}

            </Link>;
          </li>;
        )}
      </ul>;
    </nav>;