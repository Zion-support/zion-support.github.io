<<<<<<< HEAD
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {FilePlus} from "lucide-react";
import {EmptyResumeProps} from "./types";
export const EmptyResumeState = ({ onCreateClick }: EmptyResumeProps) => {;
  return (
=======

import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { FilePlus } from "lucide-react",;
import { EmptyResumeProps } from "./types",;
;
export const EmptyResumeState = ({ onCreateClick } EmptyResumeProps) => {;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Card className="w-full max-w-2xl mx-auto">;
      <CardContent className="py-8">;
        <div className="text-center">;
          <h2 className="text-2xl font-bold mb-2">Create Your Resume</h2>;
          <p className="text-muted-foreground mb-6">Create a professional resume to showcase your skills and experience</p>;
<<<<<<< HEAD
          <Button
            onClick={onCreateClick}
            className="gap-2">;
            <FilePlus className="h-4 w-4" />;
import { Card, CardContent  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { FilePlus  } from './lucide-react';
import { EmptyResumeProps  } from './types';
export const EmptyResumeState = ({ onCreateClick }: EmptyResumeProps) =>: any {
  return (
    <Card className="w - full max - w-2xl mx - auto">;
      <CardContent className="py - 8">;
        <div className="text - center">;
          <h2 className="text - 2xl font - bold mb - 2">Create Your Resume</h2>;
          <p className="text - muted - foreground mb - 6">;
            Create a professional resume to showcase your skills and experience;
          </p>;
          <Button on_click={onCreateClick} className="gap - 2">;
            <FilePlus className="h - 4 w - 4" />;
=======
          <Button ;
            onClick={onCreateClick}
            className="gap-2";
          >;
            <FilePlus className="h-4 w-4" />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            Create Resume;
          </Button>;
        </div>;
      </CardContent>;
<<<<<<< HEAD
    </Card>);
}
;
=======
    </Card>;
  ),;
},; export const EmptyResumeState = ({
  onCreateClick 
}: EmptyResumeProps) => {
  return (<Card className="w-full max-w-2xl mx-auto" > <CardContent className="py-8" > <div className="text-center" > <h2 className="text-2xl font-bold mb-2" >Create Your Resume</h2> <p className="text-muted-foreground mb-6" >Create a professional resume to showcase your skills and experience</p> onCreateClick 
}className="gap-2" > <FilePlus className="h-4 w-4" /> Create Resume </Button> </div> </CardContent> </Card>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
