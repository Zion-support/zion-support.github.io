import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { CAREER_JOBS } from "@/data/careersJobs";

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers at Zion - Join Our Team"
        description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform."
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <GradientHeading
                level="h1"
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Join Our Team
              </GradientHeading>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Help us build the future of AI and technology. We're looking for passionate individuals
                who want to make a difference in the world.
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All Positions</TabsTrigger>
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {CAREER_JOBS.map((job) => (
                    <Card key={job.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {job.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{job.location}</span>
                          <Button asChild>
                            <Link href={`/careers/${job.id}`}>Apply Now</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="engineering" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {CAREER_JOBS.filter(job => job.department === 'engineering').map((job) => (
                    <Card key={job.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {job.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{job.location}</span>
                          <Button asChild>
                            <Link href={`/careers/${job.id}`}>Apply Now</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="design" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {CAREER_JOBS.filter(job => job.department === 'design').map((job) => (
                    <Card key={job.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {job.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{job.location}</span>
                          <Button asChild>
                            <Link href={`/careers/${job.id}`}>Apply Now</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="marketing" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {CAREER_JOBS.filter(job => job.department === 'marketing').map((job) => (
                    <Card key={job.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {job.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{job.location}</span>
                          <Button asChild>
                            <Link href={`/careers/${job.id}`}>Apply Now</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}