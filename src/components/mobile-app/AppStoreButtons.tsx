<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react"
import { Apple, GithubIcon } from 'lucide-react'import { cn } from "@/lib/utils"
import { logInfo } from '@/utils/productionLogger'
interface AppStoreButtonsProps {
  className?: string
  appStoreUrl?: string
  googlePlayUrl?: string
  onAppStoreClick?: () => void
  onGooglePlayClick?: () => void
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
appStoreUrl?: string;
  googlePlayUrl?: string;
  onAppStoreClick?: () => void;
  onGooglePlayClick?: () => void;
}

<<<<<<< HEAD


=======
export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ ;
  className;
  appStoreUrl = "#";
  googlePlayUrl = "#";
};  className,
import React from "react",
import { Apple, GithubIcon } from 'lucide-react'
import { cn } from "@/lib/utils";
import { logInfo } from '@/utils/productionLogger';
import { cn } from "@/lib/utils",
import { logInfo } from '@/utils/productionLogger',
import { cn } from "@/lib/utils",
import { logInfo } from '@/utils/productionLogger',
interface AppStoreButtonsProps {
  className?: string,
  appStoreUrl?: string,
  googlePlayUrl?: string,
  onAppStoreClick?: () => void,
  onGooglePlayClick?: () => void
}

export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({
  className
  appStoreUrl = "#"
  googlePlayUrl = "#"
};  className
  appStoreUrl = "#"
  googlePlayUrl = "#"
  onAppStoreClick
  onGooglePlayClick
},) => {
  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>,) => {
    if (!appStoreUrl |appStoreUrl === "#") {
      e.preventDefault()
      logInfo("App Store download clicked")
      onAppStoreClick?.()
    }
  }
  const handleGooglePlayClick = (e: React.MouseEvent<HTMLAnchorElement>,) => {
    if (!googlePlayUrl |googlePlayUrl === "#") {
      e.preventDefault()
      logInfo("Google Play download clicked")
export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ 
  className,
export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ 
  className,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  appStoreUrl = "#",
  googlePlayUrl = "#",
  onAppStoreClick,
  onGooglePlayClick
<<<<<<< HEAD
<<<<<<< HEAD


=======
}) => {
  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
},) => {
  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>,) => {
}) => {
  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    if (!appStoreUrl || appStoreUrl === "#") {
      e.preventDefault(),
      logInfo("App Store download clicked"),
      onAppStoreClick?.()
    }
  },

<<<<<<< HEAD
<<<<<<< HEAD


    if (!googlePlayUrl || googlePlayUrl === "#") {
      e.preventDefault(),
      logInfo("Google Play download clicked"),

=======
  const handleGooglePlayClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const handleGooglePlayClick = (e: React.MouseEvent<HTMLAnchorElement>,) => {
      e.preventDefault(),
      logInfo("Google Play download clicked"),
    }
  }
  return (
    <div className={cn("flex flex-col sm:flex-row gap-4", className)}>
      <a
        href = {appStoreUrl,}
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors"
        onClick = {handleAppStoreClick,}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      onGooglePlayClick?.()
    }
  }
export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ ;
  className;
  appStoreUrl = "#";
  googlePlayUrl = "#";
};  className,;
  appStoreUrl = "#",;
  googlePlayUrl = "#",;
  onAppStoreClick,;
  onGooglePlayClick;
},) => {;
  const handleAppStoreClick = (e: React && React.MouseEvent<HTMLAnchorElement>,) => {;
    if (!appStoreUrl || appStoreUrl === "#") {;
      e && e.preventDefault(),;
      logInfo("App Store download clicked"),;
      onAppStoreClick?.();
    }
  },;

  const handleGooglePlayClick = (e: React && React.MouseEvent<HTMLAnchorElement>,) => {;
    if (!googlePlayUrl || googlePlayUrl === "#") {;
      e && e.preventDefault(),;
      logInfo("Google Play download clicked"),;
      onGooglePlayClick?.();
    }
  },;

<<<<<<< HEAD
=======
  const handleGooglePlayClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const handleGooglePlayClick = (e: React.MouseEvent<HTMLAnchorElement>,) => {
  const handleGooglePlayClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    if (!googlePlayUrl || googlePlayUrl === "#") {
      e.preventDefault(),
      logInfo("Google Play download clicked"),
      onGooglePlayClick?.()
    }
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <div className={cn("flex flex-col sm:flex-row gap-4", className)}>;
      <a
<<<<<<< HEAD
<<<<<<< HEAD


        href={appStoreUrl}
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors"
        onClick={handleAppStoreClick}


        target="_blank"
        rel="noopener noreferrer"
=======
        target="_blank"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        aria-label="Download on the App Store">;
        <Apple className="h-8 w-8 mr-3" aria-hidden="true" />;
        <div>;
          <div className="text-xs">Download on the</div>;
          <div className="text-xl font-semibold">App Store</div>;
        </div>;
      </a>;


      <a


        href={googlePlayUrl}
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors"
<<<<<<< HEAD
=======
        onClick = {handleGooglePlayClick,}
ursor/fix-website-loading-errors-and-merge-6662
        target="_blank"
        aria-label="Get it on Google Play">;
        href = {appStoreUrl,}
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors"
        onClick = {handleAppStoreClick,}
        href={appStoreUrl}
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors"
        onClick={handleAppStoreClick}
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
      >
        <Apple className="h-8 w-8 mr-3" aria-hidden="true" />
        <div>
          <div className="text-xs">Download on the</div>
          <div className="text-xl font-semibold">App Store</div>
        </div>
      </a>
      <a
<<<<<<< HEAD
        href = {googlePlayUrl,}
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors"
        onClick = {handleGooglePlayClick,}
        href={googlePlayUrl}
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        onClick={handleGooglePlayClick}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


        target="_blank"
        rel="noopener noreferrer"
<<<<<<< HEAD
        aria-label="Get it on Google Play">;
=======
        aria-label="Get it on Google Play"
      >
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <svg
          viewBox="0 0 24 24"
          xmlns="http: //www && www.w3.org/2000/svg"
          className="h-8 w-8 mr-3 fill-current"
          aria-hidden="true"
<<<<<<< HEAD
<<<<<<< HEAD

=======
}

=======
          focusable="false"
        >
          <path d="M5.39712 2.55259C5.46194 2.48941 5.54489 2.44922 5.63353 2.43851C5.7219 2.42779 5.81183 2.44668 5.88981 2.4932L19.0263 9.88803C19.1105 9.93801 19.1789 10.0116 19.2221 10.0995C19.2655 10.1876 19.2823 10.2863 19.2703 10.3838C19.2584 10.4814 19.2181 10.5731 19.1546 10.648C19.0911 10.7229 19.0075 10.7776 18.9141 10.8053L5.78534 15.3491C5.69396 15.3768 5.59685 15.3796 5.50418 15.3575C5.4115 15.3351 5.32714 15.2887 5.2608 15.2235C5.19447 15.1582 5.14865 15.0768 5.12834 14.9875C5.10804 14.898 5.11404 14.8045 5.14551 14.7177L6.5082 11.2062L5.14551 7.40668C5.11404 7.31957 5.10774 7.22573 5.12804 7.13612C5.14834 7.04681 5.19447 6.96544 5.2611 6.90016C5.32745 6.83517 5.4118 6.78856 5.50448 6.76611C5.59715 6.74367 5.69396 6.74611 5.78534 6.77416L9.15613 7.91314L5.39712 2.55259Z" />
          <path d="M19.0261 9.88815L5.88954 2.49333C5.81156 2.44681 5.72164 2.42791 5.63326 2.43864C5.54462 2.44905 5.46167 2.48954 5.39685 2.55272L9.15586 7.91327L19.0261 9.88815Z" fill="white" />
          <path d="M19.1546 10.648C19.2181 10.5731 19.2584 10.4814 19.2703 10.3838C19.2823 10.2863 19.2655 10.1876 19.2221 10.0995C19.1789 10.0116 19.1105 9.93801 19.0263 9.88803L9.15613 7.91315L6.5082 11.2062L19.1546 10.648Z" fill="white" />
          <path d="M5.14551 14.7177C5.11404 14.8045 5.10804 14.898 5.12834 14.9875C5.14865 15.0768 5.19447 15.1582 5.2608 15.2235C5.32714 15.2887 5.4115 15.3351 5.50418 15.3575C5.59685 15.3796 5.69396 15.3768 5.78534 15.3491L18.9141 10.8053L6.5082 11.2062L5.14551 14.7177Z" fill="white" />
        </svg>
        <div>
          <div className="text-xs">GET IT ON</div>
          <div className="text-xl font-semibold">Google Play</div>
        </div>
      </a>
    </div>
  )
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          focusable="false">;
          <path d="M5 && M5.39712 2 && 2.55259C5.46194 2 && 2.48941 5 && 5.54489 2 && 2.44922 5 && 5.63353 2 && 2.43851C5.7219 2 && 2.42779 5 && 5.81183 2 && 2.44668 5 && 5.88981 2 && 2.4932L19.0263 9 && 9.88803C19.1105 9 && 9.93801 19 && 19.1789 10 && 10.0116 19 && 19.2221 10 && 10.0995C19.2655 10 && 10.1876 19 && 19.2823 10 && 10.2863 19 && 19.2703 10 && 10.3838C19.2584 10 && 10.4814 19 && 19.2181 10 && 10.5731 19 && 19.1546 10 && 10.648C19.0911 10 && 10.7229 19 && 19.0075 10 && 10.7776 18 && 18.9141 10 && 10.8053L5.78534 15 && 15.3491C5.69396 15 && 15.3768 5 && 5.59685 15 && 15.3796 5 && 5.50418 15 && 15.3575C5.4115 15 && 15.3351 5 && 5.32714 15 && 15.2887 5 && 5.2608 15 && 15.2235C5.19447 15 && 15.1582 5 && 5.14865 15 && 15.0768 5 && 5.12834 14 && 14.9875C5.10804 14 && 14.898 5 && 5.11404 14 && 14.8045 5 && 5.14551 14 && 14.7177L6.5082 11 && 11.2062L5.14551 7 && 7.40668C5.11404 7 && 7.31957 5 && 5.10774 7 && 7.22573 5 && 5.12804 7 && 7.13612C5.14834 7 && 7.04681 5 && 5.19447 6 && 6.96544 5 && 5.2611 6 && 6.90016C5.32745 6 && 6.83517 5 && 5.4118 6 && 6.78856 5 && 5.50448 6 && 6.76611C5.59715 6 && 6.74367 5 && 5.69396 6 && 6.74611 5 && 5.78534 6 && 6.77416L9.15613 7 && 7.91314L5.39712 2 && 2.55259Z" />;
          <path d="M19 && M19.0261 9 && 9.88815L5.88954 2 && 2.49333C5.81156 2 && 2.44681 5 && 5.72164 2 && 2.42791 5 && 5.63326 2 && 2.43864C5.54462 2 && 2.44905 5 && 5.46167 2 && 2.48954 5 && 5.39685 2 && 2.55272L9.15586 7 && 7.91327L19.0261 9 && 9.88815Z" fill="white" />;
          <path d="M19 && M19.1546 10 && 10.648C19.2181 10 && 10.5731 19 && 19.2584 10 && 10.4814 19 && 19.2703 10 && 10.3838C19.2823 10 && 10.2863 19 && 19.2655 10 && 10.1876 19 && 19.2221 10 && 10.0995C19.1789 10 && 10.0116 19 && 19.1105 9 && 9.93801 19 && 19.0263 9 && 9.88803L9.15613 7 && 7.91315L6.5082 11 && 11.2062L19.1546 10 && 10.648Z" fill="white" />;
          <path d="M5 && M5.14551 14 && 14.7177C5.11404 14 && 14.8045 5 && 5.10804 14 && 14.898 5 && 5.12834 14 && 14.9875C5.14865 15 && 15.0768 5 && 5.19447 15 && 15.1582 5 && 5.2608 15 && 15.2235C5.32714 15 && 15.2887 5 && 5.4115 15 && 15.3351 5 && 5.50418 15 && 15.3575C5.59685 15 && 15.3796 5 && 5.69396 15 && 15.3768 5 && 5.78534 15 && 15.3491L18.9141 10 && 10.8053L6.5082 11 && 11.2062L5.14551 14 && 14.7177Z" fill="white" />;

};
},
import React from "react",;
import { Apple, GithubIcon } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { logInfo } from '@/utils/productionLogger',;
interface AppStoreButtonsProps {;
  className?: string,;
  appStoreUrl?: string,;
  googlePlayUrl?: string,;
  onAppStoreClick?: () => void,;
  onGooglePlayClick?: () => void;
}
;
export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({;
  className,;
  appStoreUrl = "#",;
  googlePlayUrl = "#",;
  onAppStoreClick,;
  onGooglePlayClick;
}) => {;
  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {;
    if (!appStoreUrl || appStoreUrl === "#") {;
      e.preventDefault(),;
      logInfo("App Store download clicked"),;
      onAppStoreClick?.();
    }
  },;
  const handleGooglePlayClick = (e: React.MouseEvent<HTMLAnchorElement>) => {;
    if (!googlePlayUrl || googlePlayUrl === "#") {;
      e.preventDefault(),;
      logInfo("Google Play download clicked"),;
      onGooglePlayClick?.();
    }
  };
  return (;
    <div className={cn("flex flex-col sm:flex-row gap-4", className)}>;
      <a;
        href={appStoreUrl}
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors";
        onClick={handleAppStoreClick}
        target="_blank";
        rel="noopener noreferrer";
        aria-label="Download on the App Store";
      >;
        <Apple className="h-8 w-8 mr-3" aria-hidden="true" />;
        <div>;
          <div className="text-xs">Download on the</div>;
          <div className="text-xl font-semibold">App Store</div>;
        </div>;
      </a>;
      <a;
        href={googlePlayUrl}
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors";
        onClick={handleGooglePlayClick}
        target="_blank";
        rel="noopener noreferrer";
        aria-label="Get it on Google Play";
      >;
        <svg;
          viewBox="0 0 24 24";
          xmlns="http: //www.w3.org/2000/svg";
          className="h-8 w-8 mr-3 fill-current";
          aria-hidden="true";
          focusable="false";
        >;
          <path d="M5.39712 2.55259C5.46194 2.48941 5.54489 2.44922 5.63353 2.43851C5.7219 2.42779 5.81183 2.44668 5.88981 2.4932L19.0263 9.88803C19.1105 9.93801 19.1789 10.0116 19.2221 10.0995C19.2655 10.1876 19.2823 10.2863 19.2703 10.3838C19.2584 10.4814 19.2181 10.5731 19.1546 10.648C19.0911 10.7229 19.0075 10.7776 18.9141 10.8053L5.78534 15.3491C5.69396 15.3768 5.59685 15.3796 5.50418 15.3575C5.4115 15.3351 5.32714 15.2887 5.2608 15.2235C5.19447 15.1582 5.14865 15.0768 5.12834 14.9875C5.10804 14.898 5.11404 14.8045 5.14551 14.7177L6.5082 11.2062L5.14551 7.40668C5.11404 7.31957 5.10774 7.22573 5.12804 7.13612C5.14834 7.04681 5.19447 6.96544 5.2611 6.90016C5.32745 6.83517 5.4118 6.78856 5.50448 6.76611C5.59715 6.74367 5.69396 6.74611 5.78534 6.77416L9.15613 7.91314L5.39712 2.55259Z" />;
          <path d="M19.0261 9.88815L5.88954 2.49333C5.81156 2.44681 5.72164 2.42791 5.63326 2.43864C5.54462 2.44905 5.46167 2.48954 5.39685 2.55272L9.15586 7.91327L19.0261 9.88815Z" fill="white" />;
          <path d="M19.1546 10.648C19.2181 10.5731 19.2584 10.4814 19.2703 10.3838C19.2823 10.2863 19.2655 10.1876 19.2221 10.0995C19.1789 10.0116 19.1105 9.93801 19.0263 9.88803L9.15613 7.91315L6.5082 11.2062L19.1546 10.648Z" fill="white" />;
          <path d="M5.14551 14.7177C5.11404 14.8045 5.10804 14.898 5.12834 14.9875C5.14865 15.0768 5.19447 15.1582 5.2608 15.2235C5.32714 15.2887 5.4115 15.3351 5.50418 15.3575C5.59685 15.3796 5.69396 15.3768 5.78534 15.3491L18.9141 10.8053L6.5082 11.2062L5.14551 14.7177Z" fill="white" />;
<<<<<<< HEAD

        </svg>;
        <div>;
          <div className="text-xs">GET IT ON</div>;
          <div className="text-xl font-semibold">Google Play</div>;
        </div>;
      </a>;
    </div>;
  );
<<<<<<< HEAD
=======
};
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


export const AppStoreButtons: React.FC < AppStoreButtonsProps> = ({
  class_name;
  appStoreUrl = "#";
  googlePlayUrl = "#";
}  class_name,
  appStoreUrl = "#",
  googlePlayUrl = "#",
  onAppStoreClick,
  onGooglePlayClick;
}, ) => {
  const handleAppStoreClick = (e: React.MouseEvent < HTMLAnchorElement>, ) =>: any {
    // Check condition
if ( {) {
  $2
<<<<<<< HEAD
=======
}

};
},
import React from "react",;
import { Apple, GithubIcon } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { logInfo } from '@/utils/productionLogger',;
interface AppStoreButtonsProps {;
  className?: string,;
  appStoreUrl?: string,;
  googlePlayUrl?: string,;
  onAppStoreClick?: () => void,;
  onGooglePlayClick?: () => void;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
      e.prevent_default (),
      log_info ("App Store download clicked"),
      onAppStoreClick?.();
    }
  },
  const handleGooglePlayClick = (e: React.MouseEvent < HTMLAnchorElement>, ) =>: any {
    // Check condition
if ( {) {
  $2
}
      e.prevent_default (),
      log_info ("Google Play download clicked"),
      onGooglePlayClick?.();
    }
  },
  return (
    <div className={cn ("flex flex - col sm:flex - row gap - 4", class_name)}>;
      <a;
        href = {appStoreUrl, }
        className="flex items - center bg - black text - white rounded - lg px - 4 py - 2 hover:bg - gray - 900 transition - colors";
        on_click = {handleAppStoreClick, }
        target="_blank";
        rel="noopener noreferrer";
        aria - label="Download on the App Store";
      >;
        <Apple className="h - 8 w - 8 mr - 3" aria - hidden="true" />;
        <div>;
          <div className="text - xs">Download on the</div>;
          <div className="text - xl font - semibold">App Store</div>;
        </div>;
      </a>;
      <a;
        href = {googlePlayUrl, }
        className="flex items - center bg - black text - white rounded - lg px - 4 py - 2 hover:bg - gray - 900 transition - colors";
        on_click = {handleGooglePlayClick, }
        target="_blank";
        rel="noopener noreferrer";
        aria - label="Get it on Google Play";
      >;
        <svg;
          view_box="0 0 24 24";
          xmlns="http: //www.w3.org / 2000 / svg";
          className="h - 8 w - 8 mr - 3 fill - current";
          aria - hidden="true";
          focusable="false";
        >;
          <path d="M5.39712 2.55259C5.46194 2.48941 5.54489 2.44922 5.63353 2.43851C5.7219 2.42779 5.81183 2.44668 5.88981 2.4932L19.0263 9.88803C19.1105 9.93801 19.1789 10.0116 19.2221 10.0995C19.2655 10.1876 19.2823 10.2863 19.2703 10.3838C19.2584 10.4814 19.2181 10.5731 19.1546 10.648C19.0911 10.7229 19.0075 10.7776 18.9141 10.8053L5.78534 15.3491C5.69396 15.3768 5.59685 15.3796 5.50418 15.3575C5.4115 15.3351 5.32714 15.2887 5.2608 15.2235C5.19447 15.1582 5.14865 15.0768 5.12834 14.9875C5.10804 14.898 5.11404 14.8045 5.14551 14.7177L6.5082 11.2062L5.14551 7.40668C5.11404 7.31957 5.10774 7.22573 5.12804 7.13612C5.14834 7.04681 5.19447 6.96544 5.2611 6.90016C5.32745 6.83517 5.4118 6.78856 5.50448 6.76611C5.59715 6.74367 5.69396 6.74611 5.78534 6.77416L9.15613 7.91314L5.39712 2.55259Z" />;
          <path d="M19.0261 9.88815L5.88954 2.49333C5.81156 2.44681 5.72164 2.42791 5.63326 2.43864C5.54462 2.44905 5.46167 2.48954 5.39685 2.55272L9.15586 7.91327L19.0261 9.88815Z" fill="white" />;
          <path d="M19.1546 10.648C19.2181 10.5731 19.2584 10.4814 19.2703 10.3838C19.2823 10.2863 19.2655 10.1876 19.2221 10.0995C19.1789 10.0116 19.1105 9.93801 19.0263 9.88803L9.15613 7.91315L6.5082 11.2062L19.1546 10.648Z" fill="white" />;
          <path d="M5.14551 14.7177C5.11404 14.8045 5.10804 14.898 5.12834 14.9875C5.14865 15.0768 5.19447 15.1582 5.2608 15.2235C5.32714 15.2887 5.4115 15.3351 5.50418 15.3575C5.59685 15.3796 5.69396 15.3768 5.78534 15.3491L18.9141 10.8053L6.5082 11.2062L5.14551 14.7177Z" fill="white" />;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        </svg>;
        <div>;
          <div className="text - xs">GET IT ON</div>;
          <div className="text - xl font - semibold">Google Play</div>;
        </div>;
      </a>;
<<<<<<< HEAD
    </div>);
},
;
<<<<<<< HEAD
};
=======
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    </div>;
  );
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
