import { useRouter  } from 'next/router';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
const fetcher = null;
  return (
    <div className='max-w-2xl mx-auto space-y-4'>
      <h1 className='text-2xl font-semibold'>Edit Job</h1>
      <div>
        <label className='block text-sm font-medium'>Title</label>
        <input
          className='mt-1 w-full border rounded p-2'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label className='block text-sm font-medium'>Description</label>
        <textarea
          className='mt-1 w-full border rounded p-2'
          rows={6}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label className='block text-sm font-medium'>Category</label>
        <input
          className='mt-1 w-full border rounded p-2'
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
      </div>
      <div className='pt-2'>
        <button
          className='px-4 py-2 rounded bg-black text-white'
          onClick={save}
        >
          Save
        </button>
      </div>
    </div>
);
