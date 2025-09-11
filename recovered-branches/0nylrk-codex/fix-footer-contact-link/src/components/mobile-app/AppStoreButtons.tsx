<<<<<<< HEAD
  className?: string;
import React from './react';
import { Apple, GithubIcon } from './lucide-react';
import { cn } from '@/lib / utils';


interface AppStoreButtonsProps {
  class_name?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  onAppStoreClick?: () => void;
  onGooglePlayClick?: () => void;
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React from "react";
import {Apple, GithubIcon} from "lucide-react";
import {cn} from "@/lib/utils";
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Apple, GithubIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Apple, GithubIcon } from "lucide-react",
import { cn } from "@/lib/utils",
interface AppStoreButtonsProps {
  className?: string,
  appStoreUrl?: string,
  googlePlayUrl?: string,
  onAppStoreClick?: () => void,
  onGooglePlayClick?: () => void
}
export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface AppStoreButtonsProps {;

  className?: string;
=======
import React from './react';
import { Apple, GithubIcon } from './lucide-react';
import { cn } from '@/lib / utils';
=======


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface AppStoreButtonsProps {
  class_name?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  appStoreUrl?: string;
  googlePlayUrl?: string;
  onAppStoreClick?: () => void;
  onGooglePlayClick?: () => void;
}
<<<<<<< HEAD


export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ ;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  className;

  appStoreUrl = "#";
  googlePlayUrl = "#";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  onAppStoreClick
  onGooglePlayClick
}) => {
  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!appStoreUrl |appStoreUrl === "#") {
      e.preventDefault();
      console.log("App Store download clicked")
      onAppStoreClick?.()
    }
  }
  const handleGooglePlayClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!googlePlayUrl |googlePlayUrl === "#") {
      e.preventDefault();
      console.log("Google Play download clicked")
      onGooglePlayClick?.()
    }
  }

export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ ;
<<<<<<< HEAD
  className;
=======

  className;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  appStoreUrl = "#";
  googlePlayUrl = "#";
export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ 
  className,
  appStoreUrl = "#",
  googlePlayUrl = "#",
  onAppStoreClick,
  onGooglePlayClick
}) => {
  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!appStoreUrl || appStoreUrl === "#") {
      e.preventDefault(),
      // // // console.log("App Store download clicked"),
      onAppStoreClick?.()
    }
  },

<<<<<<< HEAD
export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ ;

export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ ;
  className;
  appStoreUrl = "#";
  googlePlayUrl = "#";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  onAppStoreClick,;
  onGooglePlayClick;
}) => {;
  const handleAppStoreClick = (e: React && React.MouseEvent<HTMLAnchorElement>) => {;
    if (!appStoreUrl || appStoreUrl === "#") {;
      e && e.preventDefault();
      console && console.log("App Store download clicked"),;
      onAppStoreClick?.();
    }
  };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleGooglePlayClick = (e: React && React.MouseEvent<HTMLAnchorElement>) => {;
    if (!googlePlayUrl || googlePlayUrl === "#") {;
      e && e.preventDefault();
      console && console.log("Google Play download clicked"),;
      onGooglePlayClick?.();

<<<<<<< HEAD


  const handleGooglePlayClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!googlePlayUrl || googlePlayUrl === "#") {
      e.preventDefault(),
      // // // console.log("Google Play download clicked"),
      onGooglePlayClick?.()
    }
  },

  return (
    <div className={cn("flex flex-col sm:flex-row gap-4", className)}>
      <a
        href={appStoreUrl}
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors"
        onClick={handleAppStoreClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Apple className="h-8 w-8 mr-3" />
        <div>
          <div className="text-xs">Download on the</div>
          <div className="text-xl font-semibold">App Store</div>
        </div>

=======
    }
  }
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (



      </Link>


      <a 
        href={googlePlayUrl} 
<<<<<<< HEAD
      </a>
      <a
        href={googlePlayUrl}
=======

  return (



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </Link>

      <a 
        href={googlePlayUrl} 
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors"
        onClick={handleGooglePlayClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http: //www.w3.org/2000/svg"
          className="h-8 w-8 mr-3 fill-current"
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
<<<<<<< HEAD
<<<<<<< HEAD

};

      </Link>
    </div>
  )
}

};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </a>
    </div>
  )

=======

};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
},
import React from "react",;
import { Apple, GithubIcon } from "lucide-react",;
import { cn } from "@/lib/utils",;
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
      // // // console.log("App Store download clicked"),;
      onAppStoreClick?.();
    }
  },;
  const handleGooglePlayClick = (e: React.MouseEvent<HTMLAnchorElement>) => {;
    if (!googlePlayUrl || googlePlayUrl === "#") {;
      e.preventDefault(),;
      // // // console.log("Google Play download clicked"),;
      onGooglePlayClick?.();
    }
  };
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
    }
  }
  return (
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className={cn("flex flex-col sm:flex-row gap-4", className)}>;
      <a
        href={appStoreUrl} 
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors"
        onClick={handleAppStoreClick}
        target="_blank"
        rel="noopener noreferrer">;
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",;
import { Apple, GithubIcon } from "lucide-react",;
import { cn } from "@/lib/utils",;
;
interface AppStoreButtonsProps {;
  className?:string,;
  appStoreUrl?:string,;
  googlePlayUrl?:string,;
  onAppStoreClick?:() => void,;
  onGooglePlayClick?:() => void,;
}
;
export const AppStoreButtons:React.FC<AppStoreButtonsProps> = ({ ;
  className,;
  appStoreUrl = "#",;
  googlePlayUrl = "#",;
  onAppStoreClick,;
  onGooglePlayClick;
}) => {;
  const handleAppStoreClick = (e:React.MouseEvent<HTMLAnchorElement>) => {;
    if (!appStoreUrl || appStoreUrl === "#") {;
      e.preventDefault(),;
      // // // console.log("App Store download clicked"),;
      onAppStoreClick?.();
    }
  },;
;
  const handleGooglePlayClick = (e:React.MouseEvent<HTMLAnchorElement>) => {;
    if (!googlePlayUrl || googlePlayUrl === "#") {;
      e.preventDefault(),;
      // // // console.log("Google Play download clicked"),;
      onGooglePlayClick?.();
    }
  },;
;
  return (;
    <div className={cn("flex flex-col sm:flex-row gap-4", className)}>;
      <a ;
    <div className={cn("flex flex-col sm:flex-row gap-4", className)}>;
      <a;
        href={appStoreUrl} ;
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors";
        onClick={handleAppStoreClick}
        target="_blank";
        rel="noopener noreferrer";
      >;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Apple className="h-8 w-8 mr-3" />;
        <div>;
          <div className="text-xs">Download on the</div>;
          <div className="text-xl font-semibold">App Store</div>;
        </div>;
      </a>;
<<<<<<< HEAD
<<<<<<< HEAD
;
      <a ;
      <a;
        href={googlePlayUrl} ;
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors";
        onClick={handleGooglePlayClick}
        target="_blank";
        rel="noopener noreferrer";
      >;
        <svg;
          viewBox="0 0 24 24";
          xmlns="http: //www.w3.org/2000/svg";
          className="h-8 w-8 mr-3 fill-current";
        >;
          <path d="M5.39712 2.55259C5.46194 2.48941 5.54489 2.44922 5.63353 2.43851C5.7219 2.42779 5.81183 2.44668 5.88981 2.4932L19.0263 9.88803C19.1105 9.93801 19.1789 10.0116 19.2221 10.0995C19.2655 10.1876 19.2823 10.2863 19.2703 10.3838C19.2584 10.4814 19.2181 10.5731 19.1546 10.648C19.0911 10.7229 19.0075 10.7776 18.9141 10.8053L5.78534 15.3491C5.69396 15.3768 5.59685 15.3796 5.50418 15.3575C5.4115 15.3351 5.32714 15.2887 5.2608 15.2235C5.19447 15.1582 5.14865 15.0768 5.12834 14.9875C5.10804 14.898 5.11404 14.8045 5.14551 14.7177L6.5082 11.2062L5.14551 7.40668C5.11404 7.31957 5.10774 7.22573 5.12804 7.13612C5.14834 7.04681 5.19447 6.96544 5.2611 6.90016C5.32745 6.83517 5.4118 6.78856 5.50448 6.76611C5.59715 6.74367 5.69396 6.74611 5.78534 6.77416L9.15613 7.91314L5.39712 2.55259Z" />;
          <path d="M19.0261 9.88815L5.88954 2.49333C5.81156 2.44681 5.72164 2.42791 5.63326 2.43864C5.54462 2.44905 5.46167 2.48954 5.39685 2.55272L9.15586 7.91327L19.0261 9.88815Z" fill="white" />;
          <path d="M19.1546 10.648C19.2181 10.5731 19.2584 10.4814 19.2703 10.3838C19.2823 10.2863 19.2655 10.1876 19.2221 10.0995C19.1789 10.0116 19.1105 9.93801 19.0263 9.88803L9.15613 7.91315L6.5082 11.2062L19.1546 10.648Z" fill="white" />;
          <path d="M5.14551 14.7177C5.11404 14.8045 5.10804 14.898 5.12834 14.9875C5.14865 15.0768 5.19447 15.1582 5.2608 15.2235C5.32714 15.2887 5.4115 15.3351 5.50418 15.3575C5.59685 15.3796 5.69396 15.3768 5.78534 15.3491L18.9141 10.8053L6.5082 11.2062L5.14551 14.7177Z" fill="white" />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <a
        href={googlePlayUrl} 
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors"
        onClick={handleGooglePlayClick}
        target="_blank"
        rel="noopener noreferrer">;
        <svg
          viewBox="0 0 24 24" 
          xmlns="http: //www && www.w3.org/2000/svg" 
          className="h-8 w-8 mr-3 fill-current">;
          <path d="M5 && M5.39712 2 && 2.55259C5.46194 2 && 2.48941 5 && 5.54489 2 && 2.44922 5 && 5.63353 2 && 2.43851C5.7219 2 && 2.42779 5 && 5.81183 2 && 2.44668 5 && 5.88981 2 && 2.4932L19.0263 9 && 9.88803C19.1105 9 && 9.93801 19 && 19.1789 10 && 10.0116 19 && 19.2221 10 && 10.0995C19.2655 10 && 10.1876 19 && 19.2823 10 && 10.2863 19 && 19.2703 10 && 10.3838C19.2584 10 && 10.4814 19 && 19.2181 10 && 10.5731 19 && 19.1546 10 && 10.648C19.0911 10 && 10.7229 19 && 19.0075 10 && 10.7776 18 && 18.9141 10 && 10.8053L5.78534 15 && 15.3491C5.69396 15 && 15.3768 5 && 5.59685 15 && 15.3796 5 && 5.50418 15 && 15.3575C5.4115 15 && 15.3351 5 && 5.32714 15 && 15.2887 5 && 5.2608 15 && 15.2235C5.19447 15 && 15.1582 5 && 5.14865 15 && 15.0768 5 && 5.12834 14 && 14.9875C5.10804 14 && 14.898 5 && 5.11404 14 && 14.8045 5 && 5.14551 14 && 14.7177L6.5082 11 && 11.2062L5.14551 7 && 7.40668C5.11404 7 && 7.31957 5 && 5.10774 7 && 7.22573 5 && 5.12804 7 && 7.13612C5.14834 7 && 7.04681 5 && 5.19447 6 && 6.96544 5 && 5.2611 6 && 6.90016C5.32745 6 && 6.83517 5 && 5.4118 6 && 6.78856 5 && 5.50448 6 && 6.76611C5.59715 6 && 6.74367 5 && 5.69396 6 && 6.74611 5 && 5.78534 6 && 6.77416L9.15613 7 && 7.91314L5.39712 2 && 2.55259Z" />;
          <path d="M19 && M19.0261 9 && 9.88815L5.88954 2 && 2.49333C5.81156 2 && 2.44681 5 && 5.72164 2 && 2.42791 5 && 5.63326 2 && 2.43864C5.54462 2 && 2.44905 5 && 5.46167 2 && 2.48954 5 && 5.39685 2 && 2.55272L9.15586 7 && 7.91327L19.0261 9 && 9.88815Z" fill="white" />;
          <path d="M19 && M19.1546 10 && 10.648C19.2181 10 && 10.5731 19 && 19.2584 10 && 10.4814 19 && 19.2703 10 && 10.3838C19.2823 10 && 10.2863 19 && 19.2655 10 && 10.1876 19 && 19.2221 10 && 10.0995C19.1789 10 && 10.0116 19 && 19.1105 9 && 9.93801 19 && 19.0263 9 && 9.88803L9.15613 7 && 7.91315L6.5082 11 && 11.2062L19.1546 10 && 10.648Z" fill="white" />;
          <path d="M5 && M5.14551 14 && 14.7177C5.11404 14 && 14.8045 5 && 5.10804 14 && 14.898 5 && 5.12834 14 && 14.9875C5.14865 15 && 15.0768 5 && 5.19447 15 && 15.1582 5 && 5.2608 15 && 15.2235C5.32714 15 && 15.2887 5 && 5.4115 15 && 15.3351 5 && 5.50418 15 && 15.3575C5.59685 15 && 15.3796 5 && 5.69396 15 && 15.3768 5 && 5.78534 15 && 15.3491L18.9141 10 && 10.8053L6.5082 11 && 11.2062L5.14551 14 && 14.7177Z" fill="white" />;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </svg>;
        <div>;
          <div className="text-xs">GET IT ON</div>;
          <div className="text-xl font-semibold">Google Play</div>;
        </div>;
      </a>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
};

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const AppStoreButtons: React.FC < AppStoreButtonsProps> = ({
  class_name;
  appStoreUrl = "#";
  googlePlayUrl = "#";
  onAppStoreClick,
  onGooglePlayClick;
}) => {
  const handleAppStoreClick = (e: React.MouseEvent < HTMLAnchorElement>) =>: any {
    // Check condition
if ( {) {
  $2
}
      e.prevent_default ();
      console.log ("App Store download clicked"),
      onAppStoreClick?.();
    }
  }
;
  const handleGooglePlayClick = (e: React.MouseEvent < HTMLAnchorElement>) =>: any {
    // Check condition
if ( {) {
  $2
}
      e.prevent_default ();
      console.log ("Google Play download clicked"),
      onGooglePlayClick?.();
    }
  }
;
  return (
    <div className={cn ("flex flex - col sm:flex - row gap - 4", class_name)}>;
      <a;
        href={appStoreUrl}
        className="flex items - center bg - black text - white rounded - lg px - 4 py - 2 hover:bg - gray - 900 transition - colors";
        on_click={handleAppStoreClick}
        target="_blank";
        rel="noopener noreferrer";
      >;
        <Apple className="h - 8 w - 8 mr - 3" />;
        <div>;
          <div className="text - xs">Download on the</div>;
          <div className="text - xl font - semibold">App Store</div>;
        </div>;
      </a>;
      <a;
        href={googlePlayUrl}
        className="flex items - center bg - black text - white rounded - lg px - 4 py - 2 hover:bg - gray - 900 transition - colors";
        on_click={handleGooglePlayClick}
        target="_blank";
        rel="noopener noreferrer";
      >;
        <svg;
          view_box="0 0 24 24";
          xmlns="http: //www.w3.org / 2000 / svg";
          className="h - 8 w - 8 mr - 3 fill - current";
        >;
          <path d="M5.39712 2.55259C5.46194 2.48941 5.54489 2.44922 5.63353 2.43851C5.7219 2.42779 5.81183 2.44668 5.88981 2.4932L19.0263 9.88803C19.1105 9.93801 19.1789 10.0116 19.2221 10.0995C19.2655 10.1876 19.2823 10.2863 19.2703 10.3838C19.2584 10.4814 19.2181 10.5731 19.1546 10.648C19.0911 10.7229 19.0075 10.7776 18.9141 10.8053L5.78534 15.3491C5.69396 15.3768 5.59685 15.3796 5.50418 15.3575C5.4115 15.3351 5.32714 15.2887 5.2608 15.2235C5.19447 15.1582 5.14865 15.0768 5.12834 14.9875C5.10804 14.898 5.11404 14.8045 5.14551 14.7177L6.5082 11.2062L5.14551 7.40668C5.11404 7.31957 5.10774 7.22573 5.12804 7.13612C5.14834 7.04681 5.19447 6.96544 5.2611 6.90016C5.32745 6.83517 5.4118 6.78856 5.50448 6.76611C5.59715 6.74367 5.69396 6.74611 5.78534 6.77416L9.15613 7.91314L5.39712 2.55259Z" />;
          <path d="M19.0261 9.88815L5.88954 2.49333C5.81156 2.44681 5.72164 2.42791 5.63326 2.43864C5.54462 2.44905 5.46167 2.48954 5.39685 2.55272L9.15586 7.91327L19.0261 9.88815Z" fill="white" />;
          <path d="M19.1546 10.648C19.2181 10.5731 19.2584 10.4814 19.2703 10.3838C19.2823 10.2863 19.2655 10.1876 19.2221 10.0995C19.1789 10.0116 19.1105 9.93801 19.0263 9.88803L9.15613 7.91315L6.5082 11.2062L19.1546 10.648Z" fill="white" />;
          <path d="M5.14551 14.7177C5.11404 14.8045 5.10804 14.898 5.12834 14.9875C5.14865 15.0768 5.19447 15.1582 5.2608 15.2235C5.32714 15.2887 5.4115 15.3351 5.50418 15.3575C5.59685 15.3796 5.69396 15.3768 5.78534 15.3491L18.9141 10.8053L6.5082 11.2062L5.14551 14.7177Z" fill="white" />;
        </svg>;
        <div>;
          <div className="text - xs">GET IT ON</div>;
          <div className="text - xl font - semibold">Google Play</div>;
        </div>;
      </a>;
    </div>);
}
;

export default AppStoreButtons;


<<<<<<< HEAD
},; interface AppStoreButtonsProps {
  className?: string;
appStoreUrl?: string;
googlePlayUrl?: string;
onAppStoreClick?: () => void;
onGooglePlayClick?: () => void 
}export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({
  onAppStoreClick;
onGooglePlayClick 
}) => {
  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  if (!appStoreUrl || appStoreUrl === "#") {
  e.preventDefault ();
// // //console.log ("App Store download clicked");
onAppStoreClick?. () h-8 w-8 mr-3"/> <div> <div className=" text-xs">Download on the</div> <div className=" text-xl font-semibold">App Store</div> </div> </Link> <a > <svg > <path d=" M5.39712 2.55259C5.46194 2.48941 5.54489 2.44922 5.63353 2.43851C5.7219 2.42779 5.81183 2.44668 5.88981 2.4932L19.0263 9.88803C19.1105 9.93801 19.1789 10.0116 19.2221 10.0995C19.2655 10.1876 19.2823 10.2863 19.2703 10.3838C19.2584 10.4814 19.2181 10.5731 19.1546 10.648C19.0911 10.7229 19.0075 10.7776 18.9141 10.8053L5.78534 15.3491C5.69396 15.3768 5.59685 15.3796 5.50418 15.3575C5.4115 15.3351 5.32714 15.2887 5.2608 15.2235C5.19447 15.1582 5.14865 15.0768 5.12834 14.9875C5.10804 14.898 5.11404 14.8045 5.14551 14.7177L6.5082 11.2062L5.14551 7.40668C5.11404 7.31957 5.10774 7.22573 5.12804 7.13612C5.14834 7.04681 5.19447 6.96544 5.2611 6.90016C5.32745 6.83517 5.4118 6.78856 5.50448 6.76611C5.59715 6.74367 5.69396 6.74611 5.78534 6.77416L9.15613 7.91314L5.39712 2.55259Z"/> <path d=" M19.0261 9.88815L5.88954 2.49333C5.81156 2.44681 5.72164 2.42791 5.63326 2.43864C5.54462 2.44905 5.46167 2.48954 5.39685 2.55272L9.15586 7.91327L19.0261 9.88815Z"fill=" white"/> <path d=" M19.1546 10.648C19.2181 10.5731 19.2584 10.4814 19.2703 10.3838C19.2823 10.2863 19.2655 10.1876 19.2221 10.0995C19.1789 10.0116 19.1105 9.93801 19.0263 9.88803L9.15613 7.91315L6.5082 11.2062L19.1546 10.648Z"fill=" white"/> <path d=" M5.14551 14.7177C5.11404 14.8045 5.10804 14.898 5.12834 14.9875C5.14865 15.0768 5.19447 15.1582 5.2608 15.2235C5.32714 15.2887 5.4115 15.3351 5.50418 15.3575C5.59685 15.3796 5.69396 15.3768 5.78534 15.3491L18.9141 10.8053L6.5082 11.2062L5.14551 14.7177Z"fill=" white"/> </svg> <div> <div className=" text-xs">GET IT ON</div> <div className=" text-xl font-semibold" >Google Play</div> </div> </Link> </div>) 
};
};

export default AppStoreButtons;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
};

export default AppStoreButtons;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
