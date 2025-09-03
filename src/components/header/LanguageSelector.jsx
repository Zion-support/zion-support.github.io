
import { Globe, Check } from 'lucide-react';

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);""

  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {

    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside)}, []);


    { code: 'ar', name: 'العربية', flag: '🇸🇦' }


  ];

  const currentLanguage = languages.find(lang => lang.code ===, selectedLanguage)};

  return ('
    <div className="relative" ref={menuRef}>

        aria-label="Select language"
      >"
        <Globe className="h-4 w-4" /" ></Globe>"

        <span className="text-sm font-medium hidden sm:block">

          {currentLanguage?.code.toUpperCase()}
        </span>
      </button>



                className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors ${
                  selectedLanguage === language.code""
                    ? 'text-zion-cyan bg-zion-purple/10'

                  <span className="text-lg">{language.flag}</span>
                  <span>{language.name}</span>
                </div>
                {selectedLanguage === language.code && (""
                  <Check className="h-4 w-4 text-zion-cyan" /" >"


                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>






