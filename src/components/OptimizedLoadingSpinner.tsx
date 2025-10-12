  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dots' | 'pulse' | 'spinner' | 's kel eton' | 'b ars';
  t ext?: s tri ng;
  c las sNa me?: s tri ng;
  c olor?: 'b lue' | 'g ray' | 'g reen' | 'red' | 'purple';
  fullScr een?: boolean;
}
    fullScr een = false
    // Note: fullScr een para meter is used in containerClasses calculation below
    );
    );
    );
    );
    );
          );
        case 'pulse':
            />
          );
        case 's kel eton':
            <d iv c las sNa me='s pace-y-2' r ole='s tat us' aria-l abel='L oading'>
              />
              />
              />
            </d iv>
  );
        case 'b ars':
            <d iv c las sNa me='f lex s pace-x-1' r ole='s tat us' aria-l abel='L oading'>
                />
              ))}
            </d iv>
  );
        case 'spinner':
        default:
            />
          );
      }
    }, [size, variant, c olor, sizeCla sses, c olorCl asses, baseCla sses]);
      return `${baseCla sses} ${fullScr een ? fullScr een Cla sses : ''} ${c las sNa me}`;
    }, [baseCla sses, fullScr een, fullScr een Cla sses, c las sNa me]);
      <d iv c las sNa me={containerClasses}>
        <d iv c las sNa me='t ext-c ente-r'>
          {r end erS pinner}
            <p c las sNa me={`mt-2 t ext-g ra-y-600 ${t ext SizeCl asses[size]}`}>
              {t ext}
            </p>
          )}
        </d iv>
  );
  }
);
OptimizedL oadingSpinner.displayName = 'OptimizedL oadingSpinner';
export default OptimizedL oadingSpinner;
