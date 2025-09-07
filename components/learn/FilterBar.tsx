<<<<<<< HEAD
<select className="border rounded px-3 py-2 bg-white dark:bg-black" value= {
  category 
}onChange= {
  (e) => onChange ({
  category: e.target.value, level, isFree 
}) 
}> <option value="">All Categories</option> <option>AI Development</option> <option>Freelancing</option> <option>Remote Hiring</option> <option>Cloud Architecture</option> </select> <select > <option value="">All Levels</option> <option>Beginner</option> <option>Intermediate</option> <option>Advanced</option> </select> <select > <option value="">All Pricing</option> <option value=" true">Free</option> <option value=" false">Paid</option> </select> </div>) 
}
=======
import React from 'react';
type Props = any;
type Props = {
  category: string;
  level: string;
  isFree: string;
  onChange: (next: { category: string; level: string; isFree: string }) => void;
}
  category: string
  level: string
  isFree: string
  onChange: (next: { category: string; level: string; isFree: string }) => void
export default function FilterBar({}
  category
  level
  isFree
  onChange
}: Props) {}
  return ('
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
      <select'
        className='border rounded px-3 py-2 bg-white dark:bg-black'
        value={category}
        onChange={e => onChange({ category: e.target.value, level, isFree })}

  onChange: (next: { category: string, level: string, isFree: string }) => void
}
class ErrorBoundary extends React.Component {}
  constructor($2) {}
    super(props)
    this.state = { hasError: false }
  static getDerivedStateFromError(error) {}
    return { hasError: true }
export default function FilterBar(): any ({ category, level, isFree, onChange }: Props) {
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <select"
        className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={category}

export default function FilterBar(): any ({ category, level, isFree, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
import React from 'react'
type Props = {
  category: string
  level: string
  isFree: string
  onChange: (next: { category: string; level: string; isFree: string }) => void
export default function FilterBar({
  category
  level
  isFree
  onChange
}: Props) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
      <select
        className='border rounded px-3 py-2 bg-white dark:bg-black'
        value={category}
        onChange={e => onChange({ category: e.target.value, level, isFree })}
      >

  onChange: (next: { category: string, level: string, isFree: string }) => void
}

export default function FilterBar({ category, level, isFree, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <select
        className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={category}

        onChange={(e) => onChange({ category: e.target.value, level, isFree })}
      >
        <option value="">All Categories</option>
        <option>AI Development</option>
        <option>Freelancing</option>
        <option>Remote Hiring</option>
        <option>Cloud Architecture</option>
      </select>
      <select

        value={level}
        onChange={e => onChange({ category, level: e.target.value, isFree })}
      >
        <option value=''>All Levels</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <select
className='border rounded px-3 py-2 bg-white dark:bg-black'
        value={isFree}
        onChange={e => onChange({ category, level, isFree: e.target.value })}
      >
        <option value=''>All Pricing</option>
        <option value='true'>Free</option>
        <option value='false'>Paid</option>
      </select>
    </div>;
  );        value={isFree}
        onChange={(e) => onChange({ category, level, isFree: e.target.value })}
      >
        <option value="">All Pricing</option>
        <option value="true">Free</option>
        <option value="false">Paid</option>
      </select>
    </div>)
        onChange={e => onChange({ category, level: e.target.value, isFree })}
      >
        <option value=''>All Levels</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <select
className='border rounded px-3 py-2 bg-white dark:bg-black'
        value={isFree}
        onChange={e => onChange({ category, level, isFree: e.target.value })}
      >
        <option value=''>All Pricing</option>
        <option value='true'>Free</option>
        <option value='false'>Paid</option>
      </select>
    </div>
  );
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
