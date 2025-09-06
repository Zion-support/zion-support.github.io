              })}
            </div>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        )
          <Link;
            key={item.path} ;
            href={item.path}
            className={cn(;
              "flex flex-col items-center justify-center flex-1 py-1 px-2";
              isActive ? "text-primary" : "text-muted-foreground";
            )}
          >;
            <div className="h-5 w-5">;
              {React.cloneElement(item.icon as React.ReactElement, {;
                className: cn("h-5 w-5", isActive ? "stroke-primary" : "stroke-muted-foreground");
              })}
            </div>;
            <span className="text-xs mt-1">{item.label}</span>;
          </Link>;
        );
      })}
    </div>;
  );
}
;
