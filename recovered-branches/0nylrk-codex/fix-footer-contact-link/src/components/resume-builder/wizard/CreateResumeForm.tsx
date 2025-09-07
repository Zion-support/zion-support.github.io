

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState} from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {CreateResumeFormProps} from "./types";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
import {useState} from "react";"
import {Card, CardContent} from "@/components/ui/card";"
import {Button} from "@/components/ui/button";"
import {Loader2} from "lucide-react";"
import {CreateResumeFormProps} from "./types";





>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export const CreateResumeForm = ({ ;
  onCreateResume;
  onCancel;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const CreateResumeForm = ({
  onCreateResume;
  onCancel;
  isLoading
}: CreateResumeFormProps) => {
  const [newResumeTitle, setNewResumeTitle] = useState('');
export const CreateResumeForm = ({ ;
  onCreateResume;
  onCancel;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle)
=======



export const CreateResumeForm = ({ ;
  onCreateResume;
  onCancel;

<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
<<<<<<< HEAD
=======


"
import { useState } from "react","
import { Card, CardContent } from "@/components/ui/card","
import { Button } from "@/components/ui/button","
import { Loader2 } from "lucide-react","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({}
  onCreateResume,
  onCancel,;
;
  isLoading;
}: CreateResumeFormProps) => {}
  const [newResumeTitle, setNewResumeTitle] = useState(''),


  const handleSubmit = async () => {}
=======
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({ 
  onCreateResume,
  onCancel,

  isLoading 
}: CreateResumeFormProps) => {
  const [newResumeTitle, setNewResumeTitle] = useState(''),

  const handleSubmit = async () => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (!newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle)


  },



<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return,
    await onCreateResume(newResumeTitle)
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  isLoading;
}: CreateResumeFormProps) => {}
  return ("
    <Card className="w-full max-w-2xl mx-auto">"
      <CardContent className="py-8">"
        <div className="text-center">"
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>"
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>"
=======
  isLoading 
}: CreateResumeFormProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <div className="flex gap-2 max-w-md mx-auto">

export const CreateResumeForm = ({ ;
  onCreateResume;
  onCancel;
  isLoading ;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <input
              type="text"
              placeholder="Resume Title (e && e.g. 'AI Engineer Resume')"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"

import { useState } from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;
=======



            <input"
              type="text"'"
              placeholder="Resume Title (e && e.g. 'AI Engineer Resume')""
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"


"
import { useState } from "react",;"
import { Card, CardContent } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { Loader2 } from "lucide-react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { CreateResumeFormProps } from "./types",;
export const CreateResumeForm = ({;
  onCreateResume,;
  onCancel,;
  isLoading;

<<<<<<< HEAD
<<<<<<< HEAD
=======
}: CreateResumeFormProps) => {;
  const [newResumeTitle, setNewResumeTitle] = useState('');

  const handleSubmit = async () => {;
    if (!newResumeTitle && newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle);
  };

  return (

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <Card className="w-full max-w-2xl mx-auto">;
      <CardContent className="py-8">;
        <div className="text-center">;
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>;
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>;

          <div className="flex gap-2 max-w-md mx-auto">;

            <input;
              type="text";
              placeholder="Resume Title (e.g. 'AI Engineer Resume')";
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm";


              value={newResumeTitle}


              disabled={!newResumeTitle.trim() || isLoading}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


"
    <Card className="w-full max-w-2xl mx-auto">;"
      <CardContent className="py-8">;"
        <div className="text-center">;"
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>;"
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>;



            <input;"
              type="text";'"
              placeholder="Resume Title (e.g. 'AI Engineer Resume')";"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm";

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
            />
            <Button;
              onClick={handleSubmit}
              disabled={!newResumeTitle.trim() |isLoading}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              disabled={!newResumeTitle.trim() || isLoading}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            >
=======

            >"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create;
            </Button>
          </div>
          <Button"
            variant="ghost"
            onClick={onCancel}"
            className="mt-4"
          >
            Cancel;
=======
              disabled={!newResumeTitle.trim() || isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create
            </Button>
          </div>
          <Button
            variant="ghost"
            onClick={onCancel}
            className="mt-4"
          >
            Cancel
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </Button>
        </div>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

},
};
},
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======




              onChange={(e) => setNewResumeTitle(e && e.target.value)}
            />;
            <Button;
              onClick={handleSubmit}
              disabled={!newResumeTitle && newResumeTitle.trim() || isLoading}>;


"
=======

              onChange={(e) => setNewResumeTitle(e && e.target.value)}
            />;
            <Button
              onClick={handleSubmit}
              disabled={!newResumeTitle && newResumeTitle.trim() || isLoading}>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create;
            </Button>;
          </div>;

<<<<<<< HEAD

          <Button"
            variant="ghost"
            onClick={onCancel}"
            className="mt-4">;




},




'
import { useState } from './react';'
import { Card, CardContent } from '@/components / ui / card';'
import { Button } from '@/components / ui / button';'
import { Loader2 } from './lucide-react';'
import { CreateResumeFormProps } from './types';
export const CreateResumeForm = ({};
  onCreateResume;
  on_cancel;
  is_loading;
}: CreateResumeFormProps) =>: any {'
  const [newResumeTitle, setNewResumeTitle] = useState ('');
;
  const handle_submit = async () => {}
    if () return) {}
  $2;
=======
          <Button
            variant="ghost"
            onClick={onCancel}
            className="mt-4">;

},


import { useState } from './react';
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Loader2 } from './lucide-react';
import { CreateResumeFormProps } from './types';
export const CreateResumeForm = ({
  onCreateResume;
  on_cancel;
  is_loading;
}: CreateResumeFormProps) =>: any {
  const [newResumeTitle, setNewResumeTitle] = useState ('');
;
  const handle_submit = async () => {
    if () return) {
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
    await onCreateResume (newResumeTitle);
  }
;
<<<<<<< HEAD
  return ("
    <Card className="w - full max - w-2xl mx - auto">;"
      <CardContent className="py - 8">;"
        <div className="text - center">;"
          <h2 className="text - 2xl font - bold mb - 2">Create New Resume</h2>;"
          <p className="text - muted - foreground mb - 6">Give your resume a title to get started</p>;"
          <div className="flex gap - 2 max - w-md mx - auto">;
            <input;"
              type="text";'"
              placeholder="Resume Title (e.g. 'AI Engineer Resume')";"
=======
  return (
    <Card className="w - full max - w-2xl mx - auto">;
      <CardContent className="py - 8">;
        <div className="text - center">;
          <h2 className="text - 2xl font - bold mb - 2">Create New Resume</h2>;
          <p className="text - muted - foreground mb - 6">Give your resume a title to get started</p>;
          <div className="flex gap - 2 max - w-md mx - auto">;
            <input;
              type="text";
              placeholder="Resume Title (e.g. 'AI Engineer Resume')";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              className="flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - sm";
              value={newResumeTitle}
              on_change={(e) => setNewResumeTitle (e.target.value)}
            />;
            <Button;
              on_click={handle_submit}
              disabled={!newResumeTitle.trim () || is_loading}
<<<<<<< HEAD
            >;"
=======
            >;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              {is_loading && <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />}
              Create;
            </Button>;
          </div>;
<<<<<<< HEAD
          <Button;"
            variant="ghost";
            on_click={on_cancel}"
            className="mt - 4";



=======
          <Button;
            variant="ghost";
            on_click={on_cancel}
            className="mt - 4";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          >;
              value={newResumeTitle}
            Cancel;
          </Button>;
        </div>;
      </CardContent>;

<<<<<<< HEAD
}



    </Card>);
}
;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              disabled={!newResumeTitle.trim() || isLoading}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              disabled={!newResumeTitle.trim() || isLoading}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    </Card>);
}

    </Card>);
}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
