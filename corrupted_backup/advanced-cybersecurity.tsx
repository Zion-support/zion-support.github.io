
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

const sortedServices = [...filteredServices].sort((a, b) => {
    }
    switch (sortBy) {

              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

              </select>
            </div>
          </div>
        </div>

          {categories.map((category) => (
            <button
}
key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${`                }
                selectedCategory === category.id

              {category.name}
            </button>
          )
}
        </div>

              </a>
            </div>
          ))}
        </div>

              📞 Call +1 (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

