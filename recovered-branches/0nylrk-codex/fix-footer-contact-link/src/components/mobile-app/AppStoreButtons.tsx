
import React from "react";
import {Apple, GithubIcon} from "lucide-react";
import {cn} from "@/lib/utils";
interface AppStoreButtonsProps {;

  className?: string;interface AppStoreButtonsProps {


import React from "react";""
import {Apple, GithubIcon} from "lucide-react";""
import {cn} from "@/lib/utils";"
interface AppStoreButtonsProps {;


  className?: string;
interface AppStoreButtonsProps {
  // TODO: Implement
}
pr-12325

  class_name?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  onAppStoreClick?: () => void;}
  onGooglePlayClick?: () => void;}
}
export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({
  className;

  appStoreUrl = "#";
  googlePlayUrl = "#";

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
  className;
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



export default AppStoreButtons;
