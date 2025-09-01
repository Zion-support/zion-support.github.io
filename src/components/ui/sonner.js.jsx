<<<<<<< HEAD
import React from 'react';'''
import { Toaster as Sonner } from 'sonner';'''
import { useTheme } from '../ThemeProvider';
const Toaster = ({ ...props }) => {}
'
''
'''
  const { theme = 'system' } = useTheme();
  return()
    <Sonner;
      theme={theme}
      className="toaster group"""
      toastOptions={{}
        classNames: {}
'
''
'''
          toast:''''
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg','''
          description: 'group-[.toast]:text-muted-foreground','''
          actionButton:''''
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground','''
          cancelButton:''''
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground'}}}
      {...props}
    />
  );
};
export { Toaster };'"""
'"'"""
=======
import React from 'react';
import { Toaster as Sonner } from "sonner";
import { useTheme } from "../ThemeProvider";
const Toaster = ({ ...props }) => {

    const { theme = "system" } = useTheme();
    return (<Sonner theme={theme} className="toaster group" toastOptions = {

  {

            classNames: {

                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}}} {...props}/>)};
export { Toaster };
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
