<div> <label className="block text-sm font-medium" >Title</label> <input required /> </div> <div> <label className="block text-sm font-medium" >Description</label> <textarea /> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> <label className="block text-sm font-medium" >Due Date</label> <input required /> </div> <div> <label className="block text-sm font-medium" >Amount (USD) </label> <input required /> </div> </div> <button > {
  loading ? 'Adding...' : 'Add Milestone' 
}</button> </form>) 
}