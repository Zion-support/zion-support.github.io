  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars';
  text?: string;
  class Name?: string;
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple';
  full Screen?: boolean;
}
    full Screen = false
    // Note: full Screen parameter is used in container Classes calculation below
    
    );
    
    );
    
    );
    
    );

    );

          );
        case 'pulse':
            
            />
          );
        case 'skeleton':
            <d iv class Name='space-y-2' role='status' aria-label='Loading'>
              
              />
              
              />
              
              />
            </d iv>
  );
        case 'bars':
            <d iv class Name='flex space-x-1' role='status' aria-label='Loading'>
                
                />
              ))}
            </d iv>
  );
        case 'spinner':
        default:
            
            />
          );
      }
    }, [size, variant, color, size Classes, color Classes, base Classes]);
    
      return `${base Classes} ${full Screen ? full Screen Classes : ''} ${class Name}`;
    }, [base Classes, full Screen, full Screen Classes, class Name]);
      <d iv class Name={container Classes}>
        <d iv class Name='text-center'>
          {render Spinner}
            <p c lass Name={`mt-2 text-gray-600 ${text Size Classes[size]}`}>
              {text}
            </p>
          )}
        </d iv>
  );
  }
);
Optimized Loading Spinner.display Name = 'Optimized Loading Spinner';
export default Optimized Loading Spinner;
