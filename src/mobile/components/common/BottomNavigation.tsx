export function BottomNavigation() {
  const router = useRouter();

  const navItems = [
    { path: '/mobile', icon: <Home />, label: 'Home' },
    {
      path: '/mobile/marketplace',
      icon: <ShoppingBag />,
      label: 'Marketplace',
    },
    { path: '/mobile/community', icon: <Users />, label: 'Community' },
    { path: '/mobile/profile', icon: <User />, label: 'Profile' },
  ];

  return (

          >
            <div className='h-5 w-5'>
              {React.cloneElement(item.icon as React.ReactElement, {
                className: cn(
                  'h-5 w-5',
                  isActive ? 'stroke-primary' : 'stroke-muted-foreground'
                ),
              })}
            </div>
            <span className='text-xs mt-1'>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );