
export default function NavigationPage() {
  return (
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
  );
});

Navigation.displayName = 'Navigation';
export default Navigation;
