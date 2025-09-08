
  useEffect(() => {;

  if (!detectedLanguage) return null;













    supportedLanguages && supportedLanguages.find((lang) => lang && lang.code === detectedLanguage)?.name ||;
    detectedLanguage;

  const handleAccept = async () => {;

    await changeLanguage(detectedLanguage);
    setOpen(false);

  }
export function LanguageDetectionPopup() {;
  const [open, setOpen] = useState(false),;


  const { t } = useTranslation(),;
  const { changeLanguage, currentLanguage, supportedLanguages } = useLanguage() as LanguageContextType,;



            {t("general && general.yes")}


            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
          >
            {t("general.yes")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>


            {t('general.no')}

          </AlertDialogCancel>;
          <AlertDialogAction;
            onClick={handleAccept}"
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
          >'





