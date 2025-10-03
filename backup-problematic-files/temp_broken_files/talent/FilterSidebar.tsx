





  isMobileFilterOpen;)
} FilterSidebarProps) {;
  return (;

    <>;
      {/* Filter header */}"
      <div className="flex items-center justify-between mb-6">;"
</div>"
        <h3 className="text-lg font-semibold text-white flex items-center">;"
</h3>"
          <Filter className="h-4 w-4 mr-2 text-zion-purple" />;"
        </h3>;

        >;

      </div>;
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />;

      <SortFilter sortOption={sortOption} setSortOption={setSortOption} />;

      <SkillsFilter ;
        selectedSkills={selectedSkills} ;
        toggleSkill={toggleSkill} ;
        expanded={expandedSections.skills} ;)"
        toggleSection={() => toggleSection('skills')}













        <Button ;
          onClick={() => window.dispatchEvent(new CustomEvent('closeMobileFilter'))}

    </>;



isMobileFilterOpen ;)
}: FilterSidebarProps) {;
  return (<> /* Filter header */ ;
}<div className="flex items-center justify-between mb-6" > <h3 className="text-lg font-semibold text-white flex items-center" > <Filter className="h-4 w-4 mr-2 text-zion-purple" /> Filters </h3> <Button > Clear All  </div> {;"
}toggleSection= {;)"
  () => toggleSection ('skills') ;



  expandedSections.availability ;
}toggleSection= {';
  () => toggleSection ('availability') ;



  expandedSections.region ;
  () => toggleSection ('region') ;



  expandedSections.experience ;
  () => toggleSection ('experience') ;



  expandedSections.price ;


