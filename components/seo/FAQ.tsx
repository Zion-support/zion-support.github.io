

import React from 'react';
type QA = any;
import React from "react";
type QA = { q: string; a: string }
type Props = { items: QA[] }
export default function FAQ({ items }: Props) {
  if (!items |items.length === 0) return null;

}

"
  if (!items || items.length === 0) return null;
