



import {useRouter} from 'next/router';


import useSWR from 'swr';




export default function EditJobPage() {;

import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default function EditJobPage(req, res) {
  try {





  const router = useRouter();
  const { id } = router && router.query;
  const { data } = useSWR(id ? `/api/jobs/${id}` : null, fetcher);
  const job = data?.job;


      setTitle(job.title || '');
      setDescription(job.description || '');
      setCategory(job.category || '')
    }


  }, [job]);
  async function save() {
    await fetch(`/api/jobs/${id}`, {




