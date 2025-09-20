  newMatches.length > 0 && (<div className="space-y-4" > <div className="flex items-center justify-between" > <h3 className="text-lg font-medium" >New Job Matches</h3> <Badge className="bg-green-100 text-green-800 border-green-300" > newMatches.length}New </Badge> </div> <JobMatchesCard key= {match.id}match= {match}onApply= {handleApply}onDecline= {handleDecline}/>) )
}</div> </div>) "
}</div> <div className="grid gap-4 md:grid-cols-2" > {viewedMatches.map (match => (<JobMatchesCard key= {
  match.id}match= {match}onApply= {handleApply}onDecline= {handleDecline}/>) )
}</div> </div>) "
}</div> <div className="grid gap-4 md:grid-cols-2" > {appliedMatches.map (match => (<JobMatchesCard key= {
