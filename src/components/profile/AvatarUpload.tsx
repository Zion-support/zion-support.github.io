import React from "react";
import { useState, useEffect  } from "react, ";
import { CldUploadButton } from "next-cloudinary, ";

type Props = {;
value?: string;
onChange?: (url: string) => void};

export function AvatarUpload({ value; onChange }: Props) {const [url; setUrl] = useState(value);