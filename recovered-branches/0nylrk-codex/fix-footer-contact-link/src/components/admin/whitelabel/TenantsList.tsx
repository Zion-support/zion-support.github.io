


                <TableHead > Brand;
                <TableHead > Subdomain;
                <TableHead > Custom Domain;
                <TableHead > Status;
                <TableHead > Created At;"
                <TableHead className="text - right">Actions;"


                    col_span={6}"
                    className="text - center py - 8 text - muted - foreground";"
                  >;

                  ;)
                ) : (
                  <TableRow key={tenant.id}>;
                    <TableCell className="font - medium">;"


                        href={`https://${tenant.subdomain}.ziontechmarketplace.com`}"
                        target="_blank";""
                        rel="noopener noreferrer";""
                        className="flex items - center hover:underline";"
                        <ExternalLink className="ml - 1 h - 3 w - 3" />;"

                        <div className="flex items - center">;"
                            href={`https://${tenant.custom_domain}`}"
                            className="hover:underline flex items - center";"

                              tenant.dns_verified ? "default" : "outline";"
                            className="ml - 2";"

                              variant="ghost";""
                              size="sm";")
                              on_click={() => verify_dns (tenant)}
                              <RefreshCcw className="h - 3 w - 3" />;"
                              <span className="sr - only">Verify DNS</span>;"
                            )}
                        <span className="text - muted - foreground text - sm">;"
</span>)
                        </span>)}

                      <Badge;"
                        variant={tenant.is_active ? "default" : "destructive"}"


                    ;"
                    <TableCell className="text - right">;"

                      <DropdownMenu>;

                        <DropdownMenuTrigger as_child>;
                          <Button variant="ghost" size="sm">;"
                            <MoreHorizontal className="h - 4 w - 4" />;"
                            <span className="sr - only">Actions</span>;"
                        <DropdownMenuContent align="end">;"

</TableCell>;
                    <TableCell>;
                      <Badge
                        variant={tenant && tenant.is_active ? "default" : "destructive"}>;
                        {tenant && tenant.is_active ? "Active" : "Inactive"}
                      </Badge>;
                    </TableCell>;
                    <TableCell>;
                      {format(new Date(tenant && tenant.created_at), "MMM d, yyyy")}
                    </TableCell>;
                      ) :(;
                        <span className="text-muted-foreground text-sm">None</span>;
                      )}
                    </TableCell>;
                    <TableCell>;
                      <Badge variant={tenant.is_active ? "default" :"destructive"}>;
                        {tenant.is_active ? "Active" :"Inactive"}
                      </Badge>;
                    </TableCell>;
                    <TableCell>{format(new Date(tenant.created_at), 'MMM d, yyyy')}</TableCell>;
                    <TableCell className="text-right">;
                      <DropdownMenu>;
                        <DropdownMenuTrigger asChild>;
                          <Button variant="ghost" size="sm">;
                            <MoreHorizontal className="h-4 w-4" />;
                            <span className="sr-only">Actions</span>;
                          </Button>;
                        </DropdownMenuTrigger>;
                        <DropdownMenuContent align="end">;
                          <DropdownMenuItem>;

                            <Edit className="mr - 2 h - 4 w - 4" />;"

                            <Users className="mr - 2 h - 4 w - 4" />;"

                          <DropdownMenuItem;
                            on_click={() => toggleTenantStatus (tenant)}

                              <>;"
                                <PowerOff className="mr - 2 h - 4 w - 4" />;"

                              </>) : (
                                <Power className="mr - 2 h - 4 w - 4" />;"
)
                              </>)}

<Edit className="mr-2 h-4 w-4" />;
                            Edit Tenant;
                          </DropdownMenuItem>;
                          <DropdownMenuItem>;
                            <Users className="mr-2 h-4 w-4" />;
                            Manage Admins;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => toggleTenantStatus(tenant)}>;
                            {tenant.is_active ? (;
                              <>;
                                <PowerOff className="mr-2 h-4 w-4" />;
                                Disable Tenant;
                              </>;
                            ) :(;
                              <>;
                                <Power className="mr-2 h-4 w-4" />;
                                Enable Tenant;
                              </>;                            )}
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>;
                    </TableCell>;

                  </TableRow>)))}
            </TableBody>;
          </Table>;
                  )))}
        </div>)}
    </div>);
                    <TableCell>
                      <Badge variant={tenant.is_active ? "default" : "destructive"}>"

}
.from('whitelabel_tenants');
        .update({ dns_verified: true });
        .eq('id', tenant.id),;
      if (error) throw error,;
      // Update local state;
      setTenants(tenants.map(t =>;
        t.id === tenant.id ? { ...t, dns_verified: true } : t;
      )),;
      toast({;
        title: 'DNS verified',;
        description: `Custom domain for ${tenant.brand_name} has been verified.`});
    } catch (error: any) {;
      console.error('Error verifying DNS:', error),;
      toast({;
        variant: 'destructive',;
        title: 'Failed to verify DNS';
        description: error.message});
    }
  },

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">White-Label Tenants</h2>
        <Button onClick={loadTenants} variant="outline" size="sm">
          <RefreshCcw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>
      {isLoading ? (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Brand</TableHead>
                <TableHead>Subdomain</TableHead>
                <TableHead>Custom Domain</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tenants.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No tenants found. Create a new white-label instance to get started.
                  </TableCell>
                </TableRow>
              ) : (
                tenants.map((tenant) => (
                  <TableRow key={tenant.id}>
                    <TableCell className="font-medium">{tenant.brand_name}</TableCell>
                    <TableCell>
                      <a 
                        href={`https://${tenant.subdomain}.ziontechmarketplace.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline"
                      >
                        {tenant.subdomain}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </TableCell>
                    <TableCell>
                      {tenant.custom_domain ? (
                        <div className="flex items-center">
                          <a
                            href={`https://${tenant.custom_domain}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center"
                          >
                            {tenant.custom_domain}
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Link>
                          <Badge 
                            variant={tenant.dns_verified ? "default" : "outline"} 
                            className="ml-2"
                          >
                            {tenant.dns_verified ? "Verified" : "Pending"}
                          </Badge>
                          {!tenant.dns_verified && (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => verifyDns(tenant)}
                              className="ml-1 h-6 w-6 p-0"
                            >
                              <RefreshCcw className="h-3 w-3" />
                              <span className="sr-only">Verify DNS</span>
                            </Button>
                          )}
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-sm">None</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={tenant.is_active ? "default" : "destructive"}>
                        {tenant.is_active ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>{format(new Date(tenant.created_at), 'MMM d, yyyy')}</TableCell>
                    <TableCell className="text-right">
                    <TableCell>{format(new Date(tenant.created_at), 'MMM d, yyyy')}
                    <TableCell className="text-right">"

                      <DropdownMenu>

                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">"
                            <MoreHorizontal className="h-4 w-4" />"
                            <span className="sr-only">Actions</span>"
                        <DropdownMenuContent align="end">"

                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />"

                            <Users className="mr-2 h-4 w-4" />"

                          <DropdownMenuItem onClick={() => toggleTenantStatus(tenant)}>

                              <>"
                                <PowerOff className="mr-2 h-4 w-4" />"

                              </>
                                <Power className="mr-2 h-4 w-4" />"

                              </>)

                            )}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
            </TableBody>
          </Table>
        </div>
      )}

</div>
  );
}

    </div>;
return (Refresh  </div> </div>) : (<div className="rounded-md border" > <Table> <TableHeader> <TableRow> <TableHead>Brand <TableHead>Subdomain <TableHead>Custom Domain <TableHead>Status <TableHead>Created At <TableHead className="text-right" >Actions   <TableBody> {"
  tenants.length === 0 ? (<TableRow> <TableCell colSpan= {
}className="text-center py-8 text-muted-foreground" > No tenants found. Create a new white-label instance to get started.   <a href= {"`;
  `https://$ {
  tenant.custom domain;`;
}` "
}target="blank" rel="noopener noreferrer" className="hover:underline flex items-center" >  {"
  !tenant.dns verified && (<Button variant="ghost" size="sm" onClick= {")
  () => verifyDns (tenant) 
}className="ml-1 h-6 w-6 p-0" > <RefreshCcw className="h-3 w-3" /> <span className="sr-only" >Verify DNS</span> </Button>) 
}</div>) : (<span className="text-muted-foreground text-sm" >None</span>) 
}</TableCell> <TableCell> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" size="sm" > <MoreHorizontal className="h-4 w-4" /> <span className="sr-only" >Actions</span> </Button> </DropdownMenuTrigger> <DropdownMenuContent align="end" > <DropdownMenuItem> <Edit className="mr-2 h-4 w-4" /> Edit Tenant </DropdownMenuItem> <DropdownMenuItem> <Users className="mr-2 h-4 w-4" /> Manage Admins </DropdownMenuItem> <DropdownMenuItem onClick= {
  () => toggleTenantStatus (tenant) 
}> {
  tenant.is active ? (<> <PowerOff className="mr-2 h-4 w-4" /> Disable Tenant </>) : (<> <Power className="mr-2 h-4 w-4" /> Enable Tenant </>) 
}</DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </TableCell> </TableRow>) ) ) 
}</TableBody> </Table> </div>) 
}</div>) 
}
</div>
  );
}
}className="ml-1 h-6 w-6 p-0" > <RefreshCcw className="h-3 w-3" /> <span className="sr-only" >Verify DNS</span> )"
}</div>) : (<span className="text-muted-foreground text-sm" >None</span>)""
} <TableCell> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" size="sm" > <MoreHorizontal className="h-4 w-4" /> <span className="sr-only" >Actions</span>   <DropdownMenuContent align="end" > <DropdownMenuItem> <Edit className="mr-2 h-4 w-4" /> Edit Tenant  <DropdownMenuItem> <Users className="mr-2 h-4 w-4" /> Manage Admins  <DropdownMenuItem onClick= {"
  tenant.is active ? (<> <PowerOff className="mr-2 h-4 w-4" /> Disable Tenant </>) : (<> <Power className="mr-2 h-4 w-4" /> Enable Tenant </>)"

}    ) ) ) 
}  </div>) 
}</div>) 
</div>"`;
pr-12325
</div>"

