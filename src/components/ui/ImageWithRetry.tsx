import React, { useState } from 'react';
import Image { type ImageProps } from 'next/image';
import { cn } from "@/lib/utils";
interface ImageWithRetryProps extends Omit<ImageProps 'src' | 'alt'> {src: string;