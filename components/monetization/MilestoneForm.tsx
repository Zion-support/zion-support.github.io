import React, { useState } from 'react';
type Props = any;
  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      {error && <div className='text-red-600 text-sm'>{error}</div>}
      <div>
        <label className='block text-sm font-medium'>Title</label>
        <input
          className='mt-1 w-full rounded border px-3 py-2'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Phase 1 – Backend Setup'          required
        />
      </div>
      <div>
        <label className='block text-sm font-medium'>Description</label>      <div>
        <label className="block text-sm font-medium" htmlFor="input-Title">Title</label>
        <input
          className="mt-1 w-full rounded border px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Phase 1 – Backend Setup"
          required
        />
      </div>
      <div>
        <label className='block text-sm font-medium'>Description</label>
        <textarea
          className='mt-1 w-full rounded border px-3 py-2'
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder='Describe deliverables...'
          rows={3}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <label className='block text-sm font-medium'>Due Date</label>
          <input
            type='date'
            className='mt-1 w-full rounded border px-3 py-2'
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium'>Amount (USD)</label>        <textarea
          className="mt-1 w-full rounded border px-3 py-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe deliverables..."
          rows={3}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium" htmlFor="input-Due Date">Due Date</label>
          <input
            type="date"
            className="mt-1 w-full rounded border px-3 py-2"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium'>Amount (USD)</label>
          <input
            type='number'
            min={0}
            step='0.01'
            className='mt-1 w-full rounded border px-3 py-2'
            value={amountUsd}
            onChange={e => setAmountUsd(e.target.value)}
            placeholder='3000'            required          <input
            type="number"
            min={0}
            step="0.01"
            className="mt-1 w-full rounded border px-3 py-2"
            value={amountUsd}
            onChange={(e) => setAmountUsd(e.target.value)}
            placeholder="3000"
            required
          />
        </div>
      </div>
      <button
        type='submit'
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50'        disabled={loading}        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Milestone'}
      </button>
    </form>
);
}
